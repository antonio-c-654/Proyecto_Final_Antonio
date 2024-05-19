<template>

    <nav class="bg-[#14c458] text-white text-lg font-bold tracking-widest w-full h-[10vh] flex items-center justify-between">

        <p @click="toogleMenuHam()" class="flex md:hidden cursor-pointer text-xl ml-8"><i class="fa-solid fa-bars"></i></p>
        <div id="menu_hamburguesa" v-if="burger_menu_open" class="bg-[#111015] absolute top-0 w-full h-[100vh] flex flex-col gap-2 pl-4 z-10">
            <div class="w-full flex justify-end p-2">
                <i @click="toogleMenuHam()" class="fa-solid fa-xmark cursor-pointer text-3xl text-red-500"></i>
            </div>
            <router-link to="/" class="">Inicio</router-link>
            <router-link to="/" class="">Hamburguesa del mes</router-link>
            <router-link to="/contacto" class="">Contacto</router-link>
            <router-link to="/perfil/1" class="">Perfil</router-link>
            <router-link to="/register" class="">Registrarse</router-link>
            <router-link to="/login" class="">Iniciar sesión</router-link>
        </div>

        <div id="nav_izq" class="w-[60vw] h-full md:flex hidden items-center justify-around">
            <div class="h-full flex items-center">
                <img src="../assets/logo_v_3.png" class="h-[80%]">
            </div>
            <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Inicio</router-link>
            <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Hamburguesa del mes</router-link>
            <router-link to="/contacto" class="hover:text-black hover:underline hover:underline-offset-4">Contacto</router-link>
            <router-link to="/perfil/1" class="hover:text-black hover:underline hover:underline-offset-4">Perfil</router-link>
        </div>

        <div id="nav_der" class="w-[30vw] border-l-black h-full flex items-center justify-evenly">

            <CartVue></CartVue>

            <div id="register_sesion" v-if="!burger_menu_open" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <router-link to="/register" class="">Registrarse</router-link>
                <i class="fa-solid fa-user-plus ml-3"></i>
            </div>
            <div id="login_sesion" v-if="!burger_menu_open" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <router-link to="/login" class="">Iniciar sesión</router-link>
                <i class="fa-solid fa-user ml-3"></i>
            </div>
            <div id="login_sesion_close" v-if="!burger_menu_open" class="hidden items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <span>Cerrar sesión</span>
                <i class="fa-solid fa-right-to-bracket ml-3"></i>
            </div>
        </div>

    </nav>
    
</template>

<script>
import CartVue from '@/components/CartVue.vue';
export default {
    name: 'NavVue',
    components: { CartVue },
    data(){
        return{
            burger_menu_open: false
        }
    },
    methods:{
        toogleMenuHam(){
            this.burger_menu_open = !this.burger_menu_open
        }
    }
}
</script>

<style>

</style>