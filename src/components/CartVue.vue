<template>

    <div @click="toogleCart()" id="carrito_icono" class="relative p-3 cursor-pointer">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
        <span class="absolute top-0 r-0 text-sm bg-teal-700 rounded-full px-1">0</span>
    </div>

    <div id="cart_contenido" v-if="cart_visible" class="absolute top-[11vh] md:right-[12vw] right-0 md:w-[40vw] md:h-[60vh] w-full max-h-[89vh] flex flex-col items-center gap-2 border-2 border-[#14c458] overflow-y-scroll no-scrollbar bg-[#111015] rounded-md px-4 pt-4">
        <div class="w-full flex justify-end text-red-500">
            <p @click="toogleCart()" class="cursor-pointer text-3xl hover:scale-110"><i class="fa-solid fa-xmark"></i></p>
        </div>

        <div v-for="i in 4" :key="i" class="w-full h-auto flex items-center bg-[#22222a] rounded-md py-2 md:py-0">
            <img src="https://img.freepik.com/foto-gratis/hamburguesa-vista-frontal-verduras-carne_23-2148868238.jpg?t=st=1710099359~exp=1710102959~hmac=b9613667d87979d8515a6f981f0438b2b2ea88a03adecd9cc34d92ff93836ea3&w=740" class="w-[20%] hidden md:flex">
            <div class="md:w-[35%] w-[48%] flex flex-col justify-center h-full pl-4 gap-2">
                <span class="md:text-sm text-xs">Hamburguesa Deluxe</span>
                <span class="md:text-sm text-xs text-teal-400">14.99 €</span>
            </div>
            
            <div class="md:w-[25%] w-[35%]">
                <select class="bg-transparent text-white text-sm">
                    <option value=null class="bg-[#22222a]" disabled selected>Cocción</option>
                    <option value="poco-h" class="bg-[#22222a]">Poco hecha</option>
                    <option value="punto-h" class="bg-[#22222a]">Al punto</option>
                    <option value="muy-h" class="bg-[#22222a]">Muy hecha</option>
                </select>
            </div>
            
            <div class="md:w-[20%] w-[17%] h-full flex items-center justify-center">
                <button class="text-red-500 border border-red-500 rounded-lg py-1 px-2 md:py-4 md:px-6 hover:border-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-between bottom-0 sticky bg-[#111015] pb-4 md:pt-2">
            <p class="text-sm md:text-xl font-bold md:w-[45%] w-full md:pl-4 py-2 md:py-0">Total: <span class="text-[#14c458]">113,55 €</span></p>
            <div class="md:w-[50%] w-full flex justify-end gap-2">
                <button @click="pagar" class="w-[120px] h-[35px] text-sm md:text-base rounded-md cursor-pointer text-white hover:border hover:border-white-600 bg-slate-500">
                    Vaciar<i class="hidden fa-regular fa-circle-xmark ml-2"></i>
                </button>
                <button @click="pagar" class="w-[160px] h-[35px] text-sm md:text-base rounded-md cursor-pointer text-white hover:border hover:border-white-600 bg-gradient-to-br from-[#14c458] to-teal-400">
                    Confirmar<i class="fa-regular fa-circle-check ml-2"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CartVue',
    data(){
        return{
            cart_visible: false,
        }
    },
    methods:{
        toogleCart(){
            this.cart_visible = !this.cart_visible
        },
        pagar(){
            this.$router.push( {name: 'pago', params:{id: 1}} )
        },
    }
}
</script>

<style>

</style>