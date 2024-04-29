<template>

  <div>
    <nav class="bg-[#14c458] text-white text-lg font-bold tracking-widest w-full h-[10vh] flex items-center justify-between px-4 md:px-6">
      <div class="h-full flex items-center">
        <img src="../assets/logo_v_3.png" class="h-[80%]">
      </div>
      <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Inicio</router-link>
      <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Cerrar sesión</router-link>
    </nav>
    
    <div class="bg-[#111015] text-white flex flex-col items-center h-[90vh] w-full">
      
      <div id="perfil" class="w-full h-[20vh] flex items-center p-2 bg-gradient-to-r from-[#22222a] via-[#22222a] to-teal-900">
        <img src="../assets/pfp_burger_1.jpg" class="w-[30vw] h-[30vw] md:w-[7vw] md:h-[7vw] md:ml-6 rounded-full border-2 border-[#14c458]">
        <p class="ml-4">manolo_000@gmail.com</p>
      </div>
      <div class="mt-4 p-2 md:flex md:flex-col">
        <label>Expositor de medallas</label>
        <div id="expositor" class="w-full md:w-[30vw] h-auto flex items-center justify-evenly p-4 mb-4 mt-2 rounded-lg bg-[#26262c border border-[#14c458]">
          <!-- <img src="../assets/medal_1.png" class="h-[70px]"> -->
          <medal1-atropos-vue-vue></medal1-atropos-vue-vue>
          <medal1-atropos-vue-vue></medal1-atropos-vue-vue>
          <medal1-atropos-vue-vue></medal1-atropos-vue-vue>
          <medal1-atropos-vue-vue></medal1-atropos-vue-vue>
        </div>
        <label>Nueva contraseña</label>
        <input type="password" placeholder="Contraseña" v-model="password" class="p-2 rounded-md w-full md:w-[30vw] bg-[#111015] border border-[#14c458] my-2">
        <label>Dirección</label>
        <input type="password" placeholder="Dirección" v-model="direccion" class="p-2 rounded-md w-full md:w-[30vw] bg-[#111015] border border-[#14c458] my-2">
        <div>
          <button @click="vaciarCampos" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-red-700 to-red-500 my-8">Descartar</button>
          <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400 ml-4">Guardar</button>
        </div>
        
      </div>
    </div>
  </div>

</template>

<script>
// atropos
import Medal1AtroposVueVue from '@/components/Medal1AtroposVue.vue'

export default {
  components: { Medal1AtroposVueVue },
  data(){
    return{
      password: null,
      direccion: null
    }
  },
  methods:{
    vaciarCampos(){
      this.password = null
      this.direccion = null
    }
  }
}
</script>

<style lang="sass" scoped>

</style>