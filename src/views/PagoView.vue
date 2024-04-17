<template>

  <div class="bg-[#111015] h-auto min-h-[100vh] md:h-[100vh] text-white flex flex-col p-2">

    <h1 class="text-[#14c458] text-3xl">Metodos de pago</h1>

    <div class="flex flex-col gap-4">
      <p class="">Seleccione metodo de pago</p>
      <h1 class="text-[#14c458]">Tarjeta</h1>
      <div class="md:w-[50vw] border border-red-600 md:flex">
        <div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png" class="w-[70vw] md:w-[20vw] mb-2">
        </div>
        <div class="md:flex md:flex-col md:justify-center md:w-[50%] md:pl-8">
          <p>Numero de tarjeta</p>
          <input type="text" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
          <p>Fecha de caducidad</p>
          <input type="text" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
          <p>Codigo CCV de tarjeta</p>
          <input type="text" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
        </div>
      </div>
      <h1 class="text-[#14c458]">Otros metodos de pago online</h1>
      <div v-for="met in metodos_pago" :key="met.id" class="border flex items-center justify-between h-[10vh] md:w-[50vw] py-2 px-2 bg-[#22222a]">
        <p class="w-[30%]">{{ met.nombre }}</p>
        <img :src="met.logo" class="w-[40%] md:w-[5vw]">
        <input type="radio" id="met_pago" name="met_pago" :value="met.id">
      </div>
    </div>

    <button @click="alertaToast" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400 my-4">Pagar</button>

  </div>

</template>

<script>
import { mapState } from 'vuex';
import { useToast } from "vue-toastification";

export default {
  computed:{
    ...mapState(['metodos_pago'])
  },
  setup() {
      const toast = useToast();      
      return { toast }
    },
    methods: {
      alertaToast() {
        // this.toast.success("Correcto");
        this.toast.success("Correcto", {
        timeout: 2000
      });
      }
    }

}
</script>

<style lang="sass" scoped>

</style>