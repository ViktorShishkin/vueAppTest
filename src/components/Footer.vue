<script setup>

import Nav from '@/components/Nav.vue'
import Logo from '@/components/Logo.vue'

</script>

<template>
  <div class="footer">
    <Logo />
    <Nav />
  </div>
</template>

<style scoped>

.footer {
   display: flex;
   justify-content: space-between;
   align-content: center;
   padding: 10px;
}

</style>
