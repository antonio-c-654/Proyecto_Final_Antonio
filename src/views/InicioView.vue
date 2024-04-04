<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] flex h-[90vh]">

      <div id="menu_lateral" class="w-[12vw] h-[70vh] flex flex-col pl-4 text-white">

        <h1 class="text-2xl underline mt-8 mb-8 ml-2">Productos</h1>

        <div v-for="cat in categorias" :key="cat.id_cat" class="hover:bg-white hover:text-black rounded-md h-[40px] w-[80%] pl-2 flex items-center mb-4 cursor-pointer">
            <span v-html="cat.icono" class="mr-2"></span>
            <span>{{ cat.nombre }}</span>
        </div>
          
      </div>

      <div id="productos" class="h-auto w-[88vw] grid grid-cols-4 gap-6 justify-evenly overflow-scroll no-scrollbar p-8">

        <div v-for="producto in productos" :key="producto.id" class="producto bg-[#22222a] w-[20vw] h-[25vw] rounded-md flex flex-col items-center justify-around p-4">
            <div class="w-full flex justify-between">
                <i class="fa-solid fa-circle-info text-white"></i>
                <!-- <i class="fa-solid fa-fire text-red-500"></i> -->
                <i v-if="producto.favorito" class="fa-solid fa-heart text-red-500" @click="hacer_fav"></i>
                <i v-if="producto.favorito === false" class="fa-regular fa-heart text-red-500" @click="hacer_fav"></i>
            </div>
            <img :src="producto.imagen" class="h-[150px] w-[150px] rounded-md">
            <!-- <img src="../assets/burger_1.jpg" class="h-[150px] w-[150px]"> -->
            <p class="text-[#7c7c86] text-xs"><span class="text-[#dadbdb] font-bold text-base">{{ producto.nombre }}</span> <br> {{ producto.descripcion }}</p>
            <div class="w-full flex justify-between items-center">
                <span class="text-white text-2xl">{{ producto.precio }} €</span>
                <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400">Add</button>
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