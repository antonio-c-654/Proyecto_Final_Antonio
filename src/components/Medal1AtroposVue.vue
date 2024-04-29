<template>
  
  <div>

    <atropos-component>
      
      <img
      data-atropos-offset="0.5"
      src="../assets/medal_1.png" class="h-[70px]">
      
    </atropos-component>

  </div>

</template>

<script>

// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);

export default {
  name: 'Medal1AtroposVue',
}
</script>

<style>

</style>