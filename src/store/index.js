import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

const apiURL = "https://alderson.xyz"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    links: {},
    headerDesc: '',
    experiences: {},
    projects: {},
  },
  mutations: {
    SET_EMAIL(state, payload) {
      state.email = payload
    },
    SET_LINKS(state, payload) {
      state.links = payload
    },
    SET_HEADER(state, payload) {
      state.headerDesc = payload
    },
    SET_EXPERIENCES(state, payload) {
      state.experiences = payload
    },
    SET_PROJECTS(state, payload) {
      state.projects = payload
    }
  },
  actions: {
    async setEmailLinksHeader({commit}) {
      axios
          .get(apiURL + "/home")
          .then(response => {
            commit('SET_EMAIL', response.data.email)
            commit('SET_LINKS', response.data.link)
            commit('SET_HEADER', response.data.header)
          })
    },
    async setExperience({commit}) {
      axios
          .get(apiURL + "/experiences")
          .then(response => {
            commit('SET_EXPERIENCES', response.data)
          })
    },
    async setProjects({commit}) {
      axios
          .get(apiURL + "/projects")
          .then(response => {
            //Sort project array based on the Order property
            response.data.sort((a,b) => (a.order > b.order) ? 1 : -1)
            commit('SET_PROJECTS', response.data)
          })
    }

  },
  modules: {
  },
  getters: {
    getEmail: state => state.email,
    getLinks: state => state.links,
    getHeaderDesc: state => state.headerDesc,
    getExperiences: state => state.experiences,
    getProjects: state => state.projects,
    getIsHomeLoaded: state => {
      return !!(state.email && state.links && state.headerDesc && state.experiences && state.projects)
    },
    getApiUrl() {
      return apiURL
    }

  }
})
