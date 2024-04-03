<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] h-auto">
      <div class="md:w-[40vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
        <h2 class="md:text-2xl text-lg">¿En qué te podemos ayudar?</h2>
        <p class="md:text-base text-sm">Apreciamos tu feedback para mejorar</p>
        <input type="text" placeholder="Nombre" v-model="nombre" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="email" placeholder="Email" v-model="email" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="number" min="0" placeholder="Telefono" v-model="telefono" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <select name="categ" id="categ" v-model="categoria" class="text-white p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
          <option value="categoria" selected>- Categoria -</option>
          <option value="duda">Duda</option>
          <option value="incidencia">Incidencia</option>
          <option value="sugerencia">Sugerencia</option>
          <option value="otro">Otro</option>
        </select>
        <textarea name="mensaje" id="mensaje" v-model="mensaje" placeholder="Escribe aqui tu mensaje..." class="p-2 rounded-md w-full h-[15vh] bg-[#111015] border border-[#14c458]"></textarea>
        <div>
          <input type="checkbox" id="polit_priv" v-model="politica" class="p-2 rounded-md">
          <label for="polit_priv" class="text-white md:text-base text-sm"> He leído y acepto la política de privacidad</label>
        </div>
        <button class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-blue-500 to-teal-400">Enviar</button>

        <!-- <span>{{ nombre }} - {{ email }} - {{ telefono }} - {{ categoria }} - {{ mensaje }} - {{ politica }}</span> -->
      </div>
      
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
      telefono: null,
      categoria: null,
      mensaje: null,
      politica: null,
    }
  }
}
</script>

<style lang="sass" scoped>

</style>