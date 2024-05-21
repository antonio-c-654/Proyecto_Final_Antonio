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
    REGISTRAR_USER(state, datos){
      console.log(datos)
      const newID = state.usuarios.length
      const newUser = {id: newID, email: datos.email, password: datos.password, datos:{nombre: datos.nombre}, caracteristicas:{foto_perfil: 1, favoritos: [], medallas: []}, isAdmin: false}
      state.usuarios.push(newUser)
      console.log(state.usuarios)
    },
    LOGIN_USER(state, datos){
      console.log(datos)
      const encontrado = state.usuarios.find(u => u.email == datos.email && u.password == datos.password)
      console.log(encontrado)
      if(encontrado){
        state.user_logueado = encontrado.id
        console.log(state.user_logueado)
      }
      else{
        console.log('usuario no encontrado')
      }
    },
    LOGOUT(state){
      state.user_logueado = -1
      console.log(state.user_logueado)
    },

  }
})
