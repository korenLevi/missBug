export default {
    template: `
        <section class="ctrl-bar filter">
            <input class="input is-primary" type="text" v-model="filter.text" @input="searchByFilter" placeholder="Search"/>
        </section>
    `,
    data(){
        return {
            filter:{text:'',toyStatus:'all'}
        }
    },
    methods: {
        searchByFilter: _.debounce(function (ev) {
            this.$emit('filtered',this.filter);
        }, 500),
    }
}
