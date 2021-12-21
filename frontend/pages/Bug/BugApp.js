import BugList from '../../cmps/Bug/BugList.js'
import BugFilter from '../../cmps/Bug/BugFilter.js'


export default {
  template: `
    <section class="container bug-app">
        <BugFilter @filtered="filterBugs"></BugFilter>
        <section class="paper">
            <bugList :bugs="bugs" @deleteBug="deleteBug"></bugList>
        </section>
        <router-link class="compose-btn fa clear-btn base-btn" to="/bug/edit"></router-link>
    </section>
  `,  
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch({type: 'loadBugs'})
    },
    methods: {
        deleteBug(bug) {
            this.$store.dispatch({type: 'deleteBug', bugId:bug._id })
            .then(() => {
                this.$store.dispatch({type: 'loadBugs'});
            })
        },  
        filterBugs(filter){
            this.$store.commit({type:'setBugFilter', filter: JSON.parse(JSON.stringify(filter))})
            this.$store.dispatch({type: 'loadBugs'});
        },
        updateBug(bug){
            this.$store.dispatch({type: 'saveBug', bug: JSON.parse(JSON.stringify(bug))})
            .then(() => {
                this.$store.dispatch({ type:'setCompleted'});  
                if (bug.isComplete)              
                    this.$store.dispatch({type:'addAction',action:'Completed bug'});        
            })
        }

    },
    computed: {
        bugs() {     
            return this.$store.getters.bugsForDisplay;
        },
        completedTasks(){
            var progress = Math.floor(this.$store.state.progress);
            return (progress != progress ? 0 : progress);   
        }
    },
    components: {
        BugList,
        BugFilter
    }
}
