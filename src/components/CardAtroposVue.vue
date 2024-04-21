<template>
  
  <div>

    <atropos-component class="my-atropos"
      active-offset="40"
      shadow-scale="1.05"
    >
      <img
        class="w-[70vw] md:w-[20vw] mb-2"
        src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png"
      />
    </atropos-component>

  </div>

</template>

<script>

// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);

export default {
  name: 'CardAtroposVue',
}
</script>

<style>

</style>