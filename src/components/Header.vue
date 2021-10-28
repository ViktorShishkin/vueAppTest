<script setup>

import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'

</script>

<template>
  <div class="header">
    <Logo />
    <Nav />
    <div class="header_ecom">
        <div class="find"></div>
        <div class="cart"></div>
    </div>
  </div>
</template>

<style scoped>
.header {
   display: flex;
   justify-content: space-between;
   align-content: center;
   padding: 10px;
}
</style>
