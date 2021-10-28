<script setup>

import AddPost from '../components/Admin/AddPost.vue'
import AddProduct from '../components/Admin/AddProduct.vue'

</script>

<template>
  <div class="main">
    <div class="tabs">

      <div class="tabItems">
          <a
          @click=" activetab='1' "
          :class=" [ activetab === '1' ? 'active' : '' ] "
          >AddPost</a>
          <a
          @click=" activetab='2' "
          :class=" [ activetab === '2' ? 'active' : '' ] "
          >AddProduct</a>
      </div>

      <div class="tabContent">
          <div v-if="activetab ==='1'" class="activeTab">
              <AddPost />
          </div>
          <div v-if="activetab ==='2'" class="activeTab">
              <AddProduct />
          </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activetab: '1'
    }
  }
}
</script>

<style scoped>
.main {
  min-height: 80vh;
}
</style>
<style>
.tabItems a {
  padding: 8px 10px;
  color: #ffffff;
  text-decoration-line: none;
  cursor: pointer;
}
.tabItems a.active {
  padding: 8px 10px;
  color: #C99E71;
}
.activeTab {
  border: 1px solid #ffffff;
  background-color: #C99E71;
  width: 360px;
  margin: 0 auto;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
