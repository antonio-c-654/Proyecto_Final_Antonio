<template>

    <footer class="bg-[#22222a] text-white md:h-[5vh] h-auto flex md:flex-row flex-col md:items-center p-4 md:p-0 gap-2 md:gap-0 md:justify-evenly">
        <div>
            <router-link to="/politica" class="hover:underline">Politica de privacidad</router-link>
        </div>
        <div>
            <p class="text-[#14c458]">Copyright © 2024 Arleburger</p>
        </div>
        <div class="flex items-center gap-4">
            <span>Nuestras redes</span>
            <i class="fa-brands fa-instagram text-2xl cursor-pointer hover:text-purple-400"></i>
            <i class="fa-brands fa-youtube text-2xl cursor-pointer hover:text-red-500"></i>
            <i class="fa-brands fa-tiktok text-2xl cursor-pointer hover:text-blue-300"></i>
            <i class="fa-brands fa-pinterest text-2xl cursor-pointer hover:text-red-500"></i>
        </div>
        
        <!-- <div>
            <span>rating <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i></span>
        </div> -->
        <!-- <div>
            <span>location <i class="fa-solid fa-map-location-dot"></i></span>
            <span>favourite <i class="fa-regular fa-heart"> <i class="fa-solid fa-heart"></i></i> </span>
        </div> -->
    </footer>

</template>

<script>
export default {
    name: 'FooterVue'
}
</script>

<style>

</style>