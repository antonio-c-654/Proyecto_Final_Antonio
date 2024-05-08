<template>

  <div class="bg-[#111015] h-auto min-h-[100vh] md:h-[100vh] text-white flex flex-col md:flex-row">

    <div id="parte_izq" class="md:w-[50%] h-full p-4">
    
      <h1 class="text-[#14c458] text-3xl">Métodos de pago</h1>
      <div class="flex flex-col gap-4">
        <p class="">Seleccione metodo de pago</p>
        <h1 class="text-[#14c458]">Tarjeta</h1>

        <div class="md:w-[50vw] md:flex">

          <!-- <div class="card_atropos">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png" class="w-[70vw] md:w-[20vw] mb-2">
          </div> -->

          <CardAtroposVue></CardAtroposVue>

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
        <div v-for="met in metodos_pago" :key="met.id" @click="cambiarMetodoPago(met.id)" class="border flex items-center justify-between h-[10vh] md:w-[30vw] py-4 px-6 rounded-lg bg-[#22222a] hover:border-[#14c458]">
          <p class="w-[30%]">{{ met.nombre }}</p>
          <img :src="met.logo" class="w-[40%] md:w-[5vw]">
          <div class="w-[30%] h-full flex items-center justify-end">
            <i v-if="metodo_pago==met.id" class="fa-solid fa-circle-check text-[#14c458]"></i>
          </div>
        </div>
      </div>

      <p>{{ metodo_pago }}</p>
      <button @click="volverInicio" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-slate-500 my-8">Cancelar</button>
      <button @click="alertaToast" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-gradient-to-br from-[#14c458] to-teal-400 my-8 ml-6">Pagar</button>

    </div>

    <div id="parte_der" class="md:w-[50%] h-full p-4">
      <h1 class="text-[#14c458] text-3xl mb-4">Resumen de la compra</h1>
      <div class="flex flex-col gap-2">
        <div id="cabecera" class="bg-teal-400 w-full flex items-center justify-between py-4 px-6">
          <span class="text-sm">Nombre</span>
          <span class="text-sm">Cocción</span>
          <span class="text-sm">Precio</span>
        </div>
        <div v-for="i in 4" :key="i" class="w-full flex items-center justify-between bg-[#22222a] rounded-md p-6">
          <span class="text-sm">Hamburguesa Deluxe</span>
          <span class="text-sm">Al punto</span>
          <span class="text-sm text-teal-400">14.99 €</span>
        </div>
      </div>
      <h1 class="text-2xl my-6">Total: <span class="text-[#14c458]">113€</span> </h1>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex';
import { useToast } from "vue-toastification";

// atropos
import CardAtroposVue from '@/components/CardAtroposVue.vue';

export default {
  components: { CardAtroposVue },
  data(){
    return {
      metodo_pago: null
    }
  },
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
    },
    cambiarMetodoPago(valor_metodo){
      this.metodo_pago = valor_metodo
    },
    volverInicio(){
      this.$router.push( {name: 'inicio'} )
    }
  }    

}
</script>

<style lang="sass" scoped>

</style>