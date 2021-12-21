import BugService from '../../services/Bug.service.js'

export default {
    template: `
    <section>
        <form @submit.prevent="saveBug">
            <div>
                <label>
                    Name
                    <input class="input" type="text" v-model="bugToUpdate.name" autofocus>
                </label>
                 <label>
                    Description
                    <input class="input" type="text" v-model="bugToUpdate.description">
                </label>                
                <label>
                    Severity
                    <input class="input" type="number" v-model.number="bugToUpdate.severity">
                </label>                
            </div>
            <div  class="user-btns"> 
                <button class="button is-primary" >{{(bugId)? 'Save' : 'Add'}}</button>
                <router-link class="button is-primary" tag="button" to="/bug">Cancel</router-link>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            bugToUpdate: BugService.emptyBug(),
            bugId: this.$route.params.bugId
        }
    },
    created() {
        if (!this.bugId) return;
        this.$store.dispatch({type:'getBugById', bugId: this.bugId})
            .then(bug => {
                this.bugToUpdate = {...bug}
            })
    },
    methods: {
        saveBug() {
            console.log('this.bugToUpdate',this.bugToUpdate);
            this.$store.dispatch({type:'saveBug',bug: this.bugToUpdate})
                .then(addedBug => {
                    this.$router.push('/bug')
                })
                .catch(err => {
                    var userMsg = { txt: 'Bugs Loaded Failed!', type: 'danger' }
                })
        }
    }
}