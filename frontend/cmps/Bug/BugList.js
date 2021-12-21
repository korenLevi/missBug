import BugPreview from './BugPreview.js'

export default {
    template: `
        <section>
            <ul>
                <li class="flex space-between" v-for="bug in bugs" :key="bug.id">
                    <bug-preview :bug="bug"></bug-preview>
                    <section class="bug-list-btns flex space-between">
                        <button class="delete-btn fa clear-btn" @click="deleteBug(bug)"></button>
                        <router-link class="fa clear-btn delete-btn" :to="'/bug/' + bug._id" exact></router-link>
                        <router-link class="fa clear-btn delete-btn" :to="'/bug/' + bug._id + '/edit'" exact></router-link>
                    </section>
                </li>
            </ul>
        </section>
    `,
    props:['bugs'],
    components:{
        BugPreview
    },
    methods : {
        deleteBug(bug) {
            this.$emit('deleteBug',bug);
        },  
        updateBug(bug){
            this.$emit('updateBug',bug)
        }
    }
}
