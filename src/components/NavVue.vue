<template>

    <nav class="bg-[#14c458] text-white text-lg font-bold tracking-widest w-full h-[10vh] flex items-center justify-between">
        <div class="w-[60vw] h-full flex items-center justify-around">
            <div class="h-full flex items-center">
                <img src="../assets/logo_v_3.png" class="h-[80%]">
            </div>
            <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Inicio</router-link>
            <router-link to="/login" class="hover:text-black hover:underline hover:underline-offset-4">Login</router-link>
            <router-link to="/register" class="hover:text-black hover:underline hover:underline-offset-4">Register</router-link>
            <router-link to="/contacto" class="hover:text-black hover:underline hover:underline-offset-4">Contacto</router-link>
        </div>
        <div class="w-[30vw] border-l-black h-full flex items-center justify-evenly">
            <div @click="mostrarCart()" id="carrito" class="relative p-3 cursor-pointer">
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span class="absolute top-0 r-0 text-sm bg-teal-700 rounded-full px-1">0</span>
            </div>

            <div id="cart_contenido" v-if="cartVisible" class="absolute top-[11vh] right-[12vw] w-[40vw] h-[60vh] flex flex-col items-center gap-2 border-2 border-[#14c458] overflow-y-scroll no-scrollbar bg-[#111015] rounded-md p-4">

                <div class="w-full flex items-center justify-around">
                    <p class="text-lg font-bold">Total: <span class="text-[#14c458]">113,55 €</span></p>
                    <button @click="pagar" class="w-[50%] h-[40px] bg-black my-2 rounded-md cursor-pointer border hover:bg-gradient-to-br from-blue-500 to-teal-400">
                        Confirmar  <i class="fa-regular fa-circle-check"></i>
                    </button>
                </div>
                
                <div v-for="i in 4" :key="i" class="w-full h-auto flex items-center bg-[#22222a] rounded-md">
                    <img src="https://img.freepik.com/foto-gratis/hamburguesa-vista-frontal-verduras-carne_23-2148868238.jpg?t=st=1710099359~exp=1710102959~hmac=b9613667d87979d8515a6f981f0438b2b2ea88a03adecd9cc34d92ff93836ea3&w=740" class="w-[20%]">
                    <div class="w-[35%] flex flex-col justify-center h-full pl-4 gap-2">
                        <span class="text-sm">Hamburguesa Deluxe</span>
                        <span class="text-sm text-teal-400">14.99 €</span>
                    </div>
                    
                    <div class="w-[25%]">
                        <select class="bg-transparent text-white text-sm">
                            <option value="" class="bg-[#22222a]" disabled selected>Cocción</option>
                            <option value="poco-h" class="bg-[#22222a]">Poco hecha</option>
                            <option value="punto-h" class="bg-[#22222a]">Al punto</option>
                            <option value="muy-h" class="bg-[#22222a]">Muy hecha</option>
                        </select>
                    </div>
                    
                    <div class="w-[20%] h-full flex items-center justify-center">
                        <button class="w-[70%] h-[45%] hover:border rounded-md cursor-pointer bg-gradient-to-br from-red-700 to-red-500"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>

            <div id="idiomas" class="h-full flex items-center">
                <div class="flex justify-evenly items-center hover:bg-green-400 p-2 rounded-md cursor-pointer">
                    <img src="../assets/spain.png" class="w-[30px] mr-3">
                    <span>Español</span>
                </div>
                <div class="hidden justify-evenly items-center hover:bg-green-400 p-2 rounded-md cursor-pointer">
                    <img src="../assets/united-kingdom.png" class="w-[30px] mr-3 cursor-pointer">
                    <span>Ingles</span>
                </div>                
            </div>
            
            <div id="login_sesion" class="flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer">
                <router-link to="/login" class="">Iniciar sesión</router-link>
                <i class="fa-solid fa-user ml-3"></i>
            </div>
            <div id="login_sesion" class="hidden items-center hover:bg-green-400 p-2 rounded-md cursor-pointer">
                <span>Cerrar sesión</span>
                <i class="fa-solid fa-right-to-bracket ml-3"></i>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    name: 'NavVue',
    data(){
        return{
            cartVisible: false
        }
    },
    methods:{
        pagar(){
            this.$router.push( {name: 'pago', params:{id: 1}} )
        },
        mostrarCart(){
            this.cartVisible = !this.cartVisible
        }
    }
}
</script>

<style>

</style>