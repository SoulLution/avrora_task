import Vue from 'vue'
import Vuex from 'vuex'
import structure from './modules/structure'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    structure
  },
  strict: true
})