import bugService from '../services/bug.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    bugs: [],
    bugFilter: null,
  },
  mutations: {
    setBugFilter(state, { filter }) {
      state.bugFilter = filter;
    },
    deleteBug(state, { bugId }) {
      state.bugs = state.bugs.filter(bug => bug.id !== bugId)
    },
    setSelectedBug(state, { bug }) {
      state.selectedBug = bug;
    },
    addBug(state, { bug }) {
      state.bugs = [bug, ...state.bugs];
    },
    updateBug(state, { bug }) {
      const bugIdx = state.bugs.findIndex(currBug => currBug.id === bug.id)
      state.bugs.splice(bugIdx, 1, bug)
    },
    setBugs(state, {bugs}) {
      state.bugs = bugs;
    }
  },
  getters: {
    bugsForDisplay(state) {
      return state.bugs;
    },

  },
  actions: {
    loadBugs(store) {
      return bugService.getBugs(store.state.bugFilter)
      .then(bugs => {
          store.commit({ type: 'setBugs', bugs });
      })
    },
    loadBug(store, {bugId}) {
      return bugService.getById(bugId)
      .then(bug => {
        store.commit({type: 'setSelectedBug', bug});
        return bug;
      })
    },
    deleteBug(store, {bugId}) {
      return bugService.deleteBug(bugId)
      .then(()=>{
        store.commit({type: 'deleteBug', bugId});
      })
    },
    saveBug(store, {bug}) {
      const isEdit = !!bug.id;
      return bugService.saveBug(bug)
      .then(bug => {
        if (isEdit) store.commit({type: 'updateBug', bug})
        else store.commit({type: 'addBug', bug})
        return bug;
      })
    },
    getBugById(store, {bugId}) {
          return bugService.getBugById(bugId)
            .then(bug => {
              return bug;
        })   
    },
  }
})
