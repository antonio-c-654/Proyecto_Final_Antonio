import { createStore } from 'vuex'
// import { productos } from './productos'
import { categorias } from './categorias'
// import { usuarios } from './usuarios'
import { metodos_pago } from './metodos_pago'
import axios from 'axios'

export default createStore({
  state: {
    // productos: productos,
    productos: [],
    carrito: [],
    categorias: categorias,
    // usuarios: usuarios,
    metodos_pago: metodos_pago,
    user_logueado: -1
  },
  
  mutations: {
    SET_PRODUCTS(state, productos) {
      state.productos = productos
    },
    ADD_TO_CART(state, producto) {
      state.carrito.push(producto)
    },
    REMOVE_FROM_CART(state, prod_id) {
      state.carrito = state.carrito.filter(producto => producto.id != prod_id)
    },
    EMPTY_CART(state) {
      state.carrito = []
    },
    LOGIN_USER(state, usuario){
      console.log(usuario)
      if(usuario){
        state.user_logueado = usuario
        console.log(state.user_logueado)
      }
      else{
        console.log('no se ha podido hacer login')
      }
    },
    LOGOUT(state){
      state.user_logueado = -1
      console.log(state.user_logueado)
    },
  },

  actions: {
    async GET_ALL_PRODUCTS({ commit }){
      try {
        const res = await axios.get('/api/products/allProducts')
        commit('SET_PRODUCTS', res.data.productos) // contexto

      } catch (error) {
        this.toast.error('Ha habido un error:', error)
      }
    }
  }
})
