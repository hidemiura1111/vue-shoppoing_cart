import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: { // = methods
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        // call setProducts mutation
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: {
    // First param is state, second is payload
    setProducts(state, products) {
      state.products = products
    }
  },
})