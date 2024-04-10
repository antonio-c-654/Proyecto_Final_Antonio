<template>

  <div class="bg-[#111015] h-auto min-h-[100vh] md:h-[100vh] text-white flex flex-col p-2">

    <h1 class="text-[#14c458] text-3xl">Metodos de pago</h1>

    <div class="flex flex-col gap-4">
      <p class="">Seleccione metodo de pago</p>
      <div>
        <h1 class="text-[#14c458]">Tarjeta</h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png" class="w-[50vw]">
        <p>Numero de tarjeta</p>
        <input type="text">
        <p>Codigo de tarjeta</p>
        <input type="text">
      </div>
      <h1 class="text-[#14c458]">Otros metodos de pago online</h1>
      <div v-for="met in metodos_pago" :key="met.id" class="border flex items-center justify-between h-[10vh] py-2 px-2">
        <p class="w-[30%]">{{ met.nombre }}</p>
        <img :src="met.logo" class="w-[40%]">
        <input type="radio" id="met_pago" name="met_pago" :value="met.id">
      </div>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState(['metodos_pago'])
  }
}
</script>

<style lang="sass" scoped>

</style>