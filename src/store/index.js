import { createStore } from 'vuex'
import { productos } from './productos'
import { categorias } from './categorias'
import { usuarios } from './usuarios'
import { metodos_pago } from './metodos_pago'

export default createStore({
  state: {
    productos: productos,
    categorias: categorias,
    usuarios: usuarios,
    metodos_pago: metodos_pago,
    user_logueado: -1
  },
  
  mutations: {

    LOGOUT(state){
      state.user_logueado = -1
    },

  }
})
