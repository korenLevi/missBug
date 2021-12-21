const DBService = require('./DBService')


function query(criteria) {
    var namePart = criteria.name || '';
    var query = `SELECT * FROM bug  WHERE bug.name LIKE '%${namePart}%'`;

    return DBService.runSQL(query)
}

async function getById(bugId) {
    var query = `SELECT * FROM bug WHERE bug._id = ${bugId}`;

    var bugs = await DBService.runSQL(query);
    if (bugs.length === 1) return bugs[0];
    throw new Error(`bug id ${bugId} was either not found or matched too many results`);
}

function add(bug) {
    console.log('bug',bug);
    var query = `INSERT INTO bug (name, description, severity, creator) 
                VALUES ("${bug.name}",
                        "${bug.description}",
                        "${bug.severity}",
                        "${bug.creator}")`;
    
    return DBService.runSQL(query)
}


async function update(bug) {
    var query = `UPDATE bug set name = "${bug.name}",
                 description = "${bug.description}",
                 severity = ${bug.severity}
                 WHERE bug._id = ${bug._id}`;

    var okPacket = await DBService.runSQL(query);
    if (okPacket.affectedRows !== 0) return okPacket;
    throw new Error(`No bug updated - bug id ${bug._id}`);
}

function remove(bugId) {
    var query = `DELETE FROM bug WHERE bug._id = ${bugId}`;

    return DBService.runSQL(query)
            .then(okPacket => okPacket.affectedRows === 1
                ? okPacket
                : Promise.reject(new Error(`No bug deleted - bug id ${bugId}`)));
}


module.exports = {
    query,
    getById,
    add,
    update,
    remove
}