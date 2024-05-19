<template>

    <div @click="toogleCart()" id="carrito_icono" class="relative p-3 cursor-pointer">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
        <span class="absolute top-0 r-0 text-sm bg-teal-700 rounded-full px-1">0</span>
    </div>

    <div id="cart_contenido" v-if="cart_visible" class="absolute top-[11vh] right-[12vw] w-[40vw] h-[60vh] flex flex-col items-center gap-2 border-2 border-[#14c458] overflow-y-scroll no-scrollbar bg-[#111015] rounded-md px-4 pt-4">
        <div class="w-full flex justify-end text-red-500">
            <p @click="toogleCart()" class="cursor-pointer text-3xl hover:scale-110"><i class="fa-solid fa-xmark"></i></p>
        </div>

        <div v-for="i in 4" :key="i" class="w-full h-auto flex items-center bg-[#22222a] rounded-md">
            <img src="https://img.freepik.com/foto-gratis/hamburguesa-vista-frontal-verduras-carne_23-2148868238.jpg?t=st=1710099359~exp=1710102959~hmac=b9613667d87979d8515a6f981f0438b2b2ea88a03adecd9cc34d92ff93836ea3&w=740" class="w-[20%]">
            <div class="w-[35%] flex flex-col justify-center h-full pl-4 gap-2">
                <span class="text-sm">Hamburguesa Deluxe</span>
                <span class="text-sm text-teal-400">14.99 €</span>
            </div>
            
            <div class="w-[25%]">
                <select class="bg-transparent text-white text-sm">
                    <option value=null class="bg-[#22222a]" disabled selected>Cocción</option>
                    <option value="poco-h" class="bg-[#22222a]">Poco hecha</option>
                    <option value="punto-h" class="bg-[#22222a]">Al punto</option>
                    <option value="muy-h" class="bg-[#22222a]">Muy hecha</option>
                </select>
            </div>
            
            <div class="w-[20%] h-full flex items-center justify-center">
                <button class="text-red-500 border border-red-500 rounded-lg py-4 px-6 hover:border-2"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>

        <div class="w-full flex items-center justify-between bottom-0 sticky bg-[#111015] pb-4 pt-2">
            <p class="text-xl font-bold w-[45%] pl-4">Total: <span class="text-[#14c458]">113,55 €</span></p>
            <button @click="pagar" class="w-[20%] h-[40px] my-2 rounded-md cursor-pointer border hover:text-red-500 hover:border-red-500">
                Vaciar<i class="fa-regular fa-circle-xmark ml-2"></i>
            </button>
            <button @click="pagar" class="w-[30%] h-[40px] my-2 rounded-md cursor-pointer border hover:text-[#14c458] hover:border-[#14c458]">
                Confirmar<i class="fa-regular fa-circle-check ml-2"></i>
            </button>
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
    }
}
</script>

<style>

</style>