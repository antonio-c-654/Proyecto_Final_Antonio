import { createStore } from 'vuex'
import { productos } from './productos'
import { categorias } from './categorias'
import { usuarios } from './usuarios'

export default createStore({
  state: {
    productos: productos,
    categorias: categorias,
    usuarios: usuarios,
    user_logueado: -1
  },
  
  mutations: {

    LOGOUT(state){
      state.user_logueado = -1
    },

  }
})
