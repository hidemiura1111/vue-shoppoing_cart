import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  steate: {
    products: []
  },

  getter: {
    productsCount() {

    }
  },

  mutations: {
    setProducts() {

    }
  },
})