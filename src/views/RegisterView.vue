<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto">
      <form action="" method="POST" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
        <p class="md:text-2xl text-xl">Register</p>
        <input type="text" placeholder="Nombre" v-model="nombre" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="email" placeholder="Email" v-model="email" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="password" placeholder="Contraseña" v-model="password" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <p class="w-full text-sm italic"><i class="fa-solid fa-circle-info"></i> La contraseña que elijas debe tener al menos 8 caracteres</p>
        <router-link to="/login" class="text-blue-500 underline w-full">¿Ya tienes cuenta? Inicia sesión</router-link>
        <button type="submit" class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Enviar</button>
      </form>
    </div>

    <FooterVue></FooterVue>
  </div>

</template>

<script>
import NavVue from '@/components/NavVue.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
  components: { NavVue, FooterVue },
  data(){
    return{
      nombre: null,
      email: null,
      password: null,
    }
  }
}
</script>

<style lang="sass" scoped>

</style>