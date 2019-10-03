import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hospitals: [],
    illnesses: [],
    levelOfPain: null,
    illness: null
  },
  actions: {
    getAllHospitals ({ state, commit }) {
      return api.getHospitalsForPatient(
        parseInt(state.illness.id.$numberInt),
        state.levelOfPain)
      .then(hospitals => {
        commit('setHospitals', hospitals)
      })
    },
    getAllIllnesses ({ commit }) {
      return api.getIllnesses()
      .then(illnesses => {
        commit('setIllnesses', illnesses)
      })
    }
  },

  mutations: {
    setIllness (state, illness) {
      state.illness = illness
    },
    setLevelOfPain (state, levelOfPain) {
      state.levelOfPain = levelOfPain
      state.hospitals = []
    },
    setHospitals (state, hospitals) {
      state.hospitals = hospitals
    },
    setIllnesses (state, illnesses) {
      state.illnesses = illnesses
    },
  }
})
