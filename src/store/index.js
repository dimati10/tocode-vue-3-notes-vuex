import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: "Learn Vue 3",
        tags: ["work"],
      },
      {
        title: "Finish course",
        tags: ["work", "home"],
      },
    ],

  },
  mutations: {
    setNote(state, note) {
      state.notes.push(note);
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    removeNote(state, index) {
      state.notes.splice(index, 1);
    }
  },
  actions: {
    setNote({ commit }, note) {
      commit('setNote', note)
    },
    setNotes({ commit }, notes) {
      commit('setNotes', notes)
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
    }
  },
  getters: {
    getNotesFromState(state) {
      return state.notes;
    },
  }
})