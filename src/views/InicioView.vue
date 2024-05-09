<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] flex md:h-[90vh] h-auto w-full">

      <div id="menu_lateral" class="w-[12vw] h-[70vh] hidden lg:flex flex-col pl-4 text-white">
        <h1 class="text-xl font-bold underline underline-offset-4 mt-8 mb-8 ml-2">Productos</h1>
        <div v-for="cat in categorias" :key="cat.id_cat" class="hover:bg-white hover:bg-opacity-90 hover:text-black rounded-md h-[40px] w-[95%] pl-2 flex items-center mb-4 cursor-pointer">
            <span v-html="cat.icono" class="mr-2"></span>
            <span class="text-sm">{{ cat.nombre }}</span>
        </div>
      </div>

      <div id="productos" class="h-auto lg:w-[88vw] w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 justify-evenly overflow-scroll no-scrollbar p-8">

        <div v-for="producto in productos" :key="producto.id" class="producto bg-[#22222a] lg:w-[20vw] lg:h-[30vw] md:w-[30vw] md:h-[35vw] w-full h-auto rounded-md flex flex-col items-center justify-between p-4">
            <div class="w-full flex justify-between">
                <i class="fa-solid fa-circle-info text-white cursor-pointer"></i>
                <!-- <div>
                  <i class="fa-solid fa-wheat-awn"></i>
                  <i class="fa-solid fa-shrimp"></i>
                  <i class="fa-solid fa-egg"></i>
                  <i class="fa-solid fa-fish"></i>

                </div> -->
                <!-- <i class="fa-solid fa-fire text-red-500"></i> -->
                <i v-if="producto.favorito" class="fa-solid fa-heart text-red-500 cursor-pointer" @click="hacer_fav"></i>
                <i v-if="producto.favorito === false" class="fa-regular fa-heart text-red-500 cursor-pointer" @click="hacer_fav"></i>
            </div>
            <div class="flex justify-center w-full md:min-h-[70%] min-h-[50%] rounded-md overflow-hidden my-2">
              <img :src="producto.imagen" class="w-full h-full">
            </div>
            <!-- <img src="../assets/burger_1.jpg" class="h-[150px] w-[150px]"> -->
            <p class="text-[#7c7c86] text-xs overflow-clip"><span class="text-[#dadbdb] font-bold text-base">{{ producto.nombre }}</span> <br> {{ producto.descripcion }}</p>
            <div class="w-full flex justify-between items-center">
                <span class="text-teal-400 lg:text-2xl md:text-xl text-lg">{{ producto.precio }} €</span>
                <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400">Añadir</button>
            </div>
        </div>

      </div>


    </div>

    <FooterVue></FooterVue>
  </div>

</template>

<script>
import NavVue from '@/components/NavVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import { mapState } from 'vuex';
export default {
  components: { NavVue, FooterVue },
  computed:{
    ...mapState(['productos', 'categorias'])
  },
  methods:{
    hacer_fav(){
      alert("Se ha guardado el prod")
    }
  }

}
</script>

<style lang="sass" scoped>

</style>