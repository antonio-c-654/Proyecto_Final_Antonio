<template>

  <form class="bg-[#111015] h-auto min-h-[100vh] md:h-[100vh] text-white flex flex-col md:flex-row">

    <div id="parte_izq" class="md:w-[50%] h-full p-4">
    
      <h1 class="text-[#14c458] text-3xl">Métodos de pago</h1>
      <div class="flex flex-col gap-4">
        <p class="my-2">Seleccione método de pago</p>
        <div v-for="met in metodos_pago" :key="met.id" @click="cambiarMetodoPago(met.nombre)" class="border flex items-center justify-between h-[15vh] md:h-[10vh] md:w-[30vw] py-4 px-6 rounded-lg bg-[#22222a] hover:border-[#14c458]">
          <p class="w-[30%]">{{ met.nombre }}</p>
          <img :src="met.logo" class="w-[40%] md:w-[5vw]">
          <div class="w-[30%] h-full flex items-center justify-end">
            <i v-if="metodo_pago==met.nombre" class="fa-solid fa-circle-check text-[#14c458] md:text-2xl"></i>
          </div>
        </div>
      </div>

      <div v-if="metodo_pago=='Tarjeta'" id="form_tarjeta" class="">
        <h1 class="text-[#14c458] my-2">Tarjeta</h1>
        <div class="w-full md:flex">
          <CardAtroposVue></CardAtroposVue>
          <div class="md:flex md:flex-col md:justify-center md:w-[50%] md:pl-8">
            <p>Numero de tarjeta</p>
            <input type="tel" v-model="num_tarjeta" pattern="[0-9\s]" minlength="13" maxlength="16" placeholder="xxxx xxxx xxxx xxxx" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
            <p>Fecha de caducidad</p>
            <input type="month" v-model="fecha_cad_tarjeta" :min="fecha_actual" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
            <p>Codigo CCV de tarjeta</p>
            <input type="tel" v-model="cod_ccv" min="0" max="999" maxlength="3" class="p-1 rounded-md w-[90%] md:w-[90%] bg-[#111015] border border-[#14c458] mb-2">
          </div>
        </div>
      </div>

      <p>{{ num_tarjeta }} - {{ fecha_cad_tarjeta }} - {{ cod_ccv }} - {{ fecha_actual }}</p>
      <p>{{ metodo_pago }}</p>
      <!-- <button @click="volverInicio" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-slate-500 my-8">Cancelar</button>
      <button @click="alertaToast" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-gradient-to-br from-[#14c458] to-teal-400 my-8 ml-6">Pagar</button> -->

    </div>

    <div id="parte_der_resumen" class="md:w-[50%] h-full p-4">
      
      <h1 class="text-[#14c458] text-lg md:text-3xl mb-4">Resumen de la compra</h1>
      <table class="w-full text-sm md:text-base">
        <thead>
          <tr class="w-full flex justify-between bg-teal-400 rounded-md p-2 md:p-4">
            <th class="w-[35%] text-start">Nombre</th>
            <th class="w-[20%] text-start">Cocción</th>
            <th class="w-[20%] text-end">Precio</th>
          </tr>
        </thead>
        <tbody class="mt-2 mb-4 flex flex-col gap-2">
          <tr v-for="i in 4" :key="i" class="w-full flex items-center justify-between bg-[#22222a] rounded-md p-2 md:p-4">
            <td class="w-[35%]">Hamburguesa Deluxe</td>
            <td class="w-[20%]">Poco hecha</td>
            <td class="w-[20%] text-teal-400 text-end">14.99 €</td>
          </tr>
        </tbody>
        <tfoot class="border-t">
          <tr class="bg-blend-lighten hover:bg-blend-darken flex justify-between text-xl font-bold p-2 md:p-4">
            <th>Total</th>
            <td class="text-[#14c458]">113€</td>
          </tr>
        </tfoot>
      </table>
      <!-- <h1 class="text-2xl my-6">Total: <span class="text-[#14c458]">113€</span></h1> -->
      <button @click="volverInicio" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-slate-500 my-8">Cancelar</button>
      <button @click="alertaToast" type="submit" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-gradient-to-br from-[#14c458] to-teal-400 my-8 ml-6">Pagar</button>
    </div>

  </form>

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
      metodo_pago: null,
      num_tarjeta: null,
      fecha_cad_tarjeta: null,
      cod_ccv: null,
      fecha_actual: this.obtenerFechaActual()
    }
  },
  computed:{
    ...mapState(['metodos_pago'])
  },
  setup() {
      const toast = useToast();      
      return { toast }
  },
  methods:{
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
    },
    obtenerFechaActual(){
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1; //meses js estan en array desde 0
      return `${year}-${month.toString().padStart(2, '0')}`; //formato YYYY-MM
    }
  }
}
</script>

<style lang="sass" scoped>

</style>