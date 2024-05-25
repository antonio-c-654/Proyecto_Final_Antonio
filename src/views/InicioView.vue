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
                <!-- <i class="fa-solid fa-circle-info text-white cursor-pointer"></i> -->
                <div class="flex gap-2">
                  <i v-if="producto.alergenos.includes('gluten')" class="fa-solid fa-wheat-awn text-yellow-600"></i>
                  <i v-if="producto.alergenos.includes('crustaceos')" class="fa-solid fa-shrimp text-red-400"></i>
                  <i v-if="producto.alergenos.includes('huevos')" class="fa-solid fa-egg text-fuchsia-100"></i>
                  <i v-if="producto.alergenos.includes('pescado')" class="fa-solid fa-fish text-blue-400"></i>
                  <i v-if="producto.alergenos.includes('soja')" class="fa-brands fa-envira text-lime-200"></i>
                  <i v-if="producto.alergenos.includes('lacteos')" class="fa-solid fa-cheese text-yellow-400"></i>
                </div>
                <!-- <i v-if="producto.destacado" class="fa-solid fa-fire text-red-500 cursor-pointer"></i> -->
                <i v-if="producto.favorito" class="fa-solid fa-heart text-red-500 cursor-pointer" @click="hacer_fav"></i>
                <i v-if="producto.favorito === false" class="fa-regular fa-heart text-red-500 cursor-pointer" @click="hacer_fav"></i>
            </div>
            <div class="flex justify-center w-full md:min-h-[70%] min-h-[50%] rounded-md overflow-hidden my-2">
              <img :src="producto.imagen" class="w-full h-full">
            </div>
            <!-- <img src="../assets/burger_1.jpg" class="h-[150px] w-[150px]"> -->
            <p class="text-[#7c7c86] text-xs overflow-clip">
              <span class="text-[#dadbdb] font-bold text-base">{{ producto.nombre }}
                <i v-if="producto.picante" class="fa-solid fa-pepper-hot text-red-600 ml-2"></i>
                <i v-if="producto.vegano" class="fa-brands fa-envira text-green-400 ml-2"></i>
              </span> <br> {{ producto.descripcion }}
            </p>
            <div class="w-full flex justify-between items-center">
                <span class="text-teal-400 lg:text-2xl md:text-xl text-lg">{{ producto.precio }} €</span>
                <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Añadir</button>
                <!-- <button class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400">Añadir</button> -->
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
import { useToast } from "vue-toastification";
import { mapState } from 'vuex';
export default {
  components: { NavVue, FooterVue },
  computed:{
    ...mapState(['productos', 'categorias'])
  },
  methods:{
    hacer_fav(){
      alert("Se ha guardado el prod")
    },
    popup_cookies(){
      this.toast.info('Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.', {
        position: "bottom-left",
        timeout: false,
        transition: "Vue-Toastification__fade",
        maxToasts: 1,
      });
    }
  },
  setup() {
      const toast = useToast();      
      return { toast }
  },
  mounted() {
    this.$store.dispatch('GET_ALL_PRODUCTS'); // cargar productos
    this.popup_cookies();
  },

}
</script>

<style lang="sass" scoped>

</style>