<template>
  <div class="container pt-2">
  <button class="btn btn-primary" @click="showProducts">Show Products</button>

  <ul class="list-group list-group-numbered">

      <li
      class="list-group-item"
      v-for="product of products"
      :key="product"
      >

      <strong>{{ product.name }}</strong> - {{ product.price }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productName: '',
      productPrice: '',
      products: []
    }
  },
  methods: {
    showProducts () {
      this.$http.get('http://localhost:3000/products')
        .then(response => {
          return response.data
        })
        .then(products => {
          this.products = products
        })
    }
  }
}
</script>
