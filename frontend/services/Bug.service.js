
const BUG_URL = 'http://localhost:3000/data/bug';

function emptyBug() {
    return {"name":"","description":"","severity":3}
}

function getBugs(filter) {
    var criteria = ''
    var    criteria = `?name=${filter && filter.text ? filter.text : ''}`
    return axios
            .get(BUG_URL + criteria)
            .then(res => res.data)
            .catch(e => console.log('No Bugs', e))
}

function saveBug(bug) {
    console.log('bug-service-front',bug);
    if (bug._id) return axios.put(BUG_URL, bug)
    else return axios.post(BUG_URL, bug);  
}

function deleteBug(bugId) {
    return axios.delete(_getBugUrl(bugId))
}


function getBugById(bugId) {
    return axios
    .get(_getBugUrl(bugId))
    .then(res => res.data)
}


function _getBugUrl(bugId) {
    return `${BUG_URL}/${bugId}`;
}

export default {
    getBugs,
    saveBug,
    deleteBug,
    emptyBug,
    getBugById
}