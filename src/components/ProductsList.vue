<template>
  <div class="container pt-2">

  <ul class="list-group list-group-numbered">
      <li
        class="list-group-item"
        v-for="product of products"
        :key="product"
      >
        <div v-if="products.length > 0">
          <strong>{{ product.name }}</strong> - {{ product.price }}
        </div>
        <div v-else>
          <h3>The product list is empty.</h3>
        </div>
      </li>
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
  },
  mounted () {
    this.showProducts()
  }
}
</script>
