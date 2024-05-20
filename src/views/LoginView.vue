<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto">
      <form action="" method="POST" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
        <p class="md:text-2xl text-xl">Login</p>
        <input type="email" placeholder="Email" v-model="email" required class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="password" placeholder="Contraseña" v-model="password" required class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <router-link to="/register" class="text-blue-500 underline w-full">¿No tienes cuenta? Regístrate</router-link>
        <router-link to="/register" class="text-blue-500 underline w-full">¿Has olvidado tu contraseña?</router-link>
        <button @click="loguear()" type="submit" class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Enviar</button>
      </form>
    </div>

    <FooterVue></FooterVue>
  </div>

</template>

<script>
import NavVue from '@/components/NavVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import { mapMutations, mapState } from 'vuex'
export default {
  components: { NavVue, FooterVue },
  data(){
    return{
      email: null,
      password: null,
    }
  },
  computed: {
        ...mapState(['user_logueado'])
  },
  methods: {
    ...mapMutations(['LOGIN_USER']),
    loguear(){
      const logUser = {email: this.email, password: this.password}
      this.LOGIN_USER(logUser)
      if (this.user_logueado != -1) {
        this.$router.push( {name: 'perfil', params: {id: this.user_logueado}} )
      } else{
        alert('datos no coinciden')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>