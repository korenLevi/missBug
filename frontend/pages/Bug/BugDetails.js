export default {
    template: `
     <section v-if="bug">
            <h1>Name: {{bug.name}}</h1>
            <h2>Description: {{bug.description}}</h2>
            <h2>Severity: {{bug.severity}}</h2>
             <router-link class="button is-primary" tag="button" to="/bug">Back</router-link>
    </section>
    `,
    data() {
        return {
            bug :  null
        }
    },
    created() {
        var bugId = this.$route.params.bugId
        this.$store.dispatch({type:'getBugById',bugId})
        .then(bug => {
            // console.log('BUG', bug);
                this.bug = bug;
            })
    }
}
    