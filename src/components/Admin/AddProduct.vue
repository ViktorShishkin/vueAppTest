<template>
  <div class="product">
    <div>
      <img class="product_image" src="@/assets/popular_coffe_product.png" alt="">
    </div>
    <div class="product_name">
      <label for="name">Name product</label>
      <input type="text" id="name" class="form-control" v-model.trim="productName">
    </div>

    <div class="product_price">
      <label for="price">Price product</label>
      <input type="text" id="price" class="form-control" v-model.number="productPrice">
    </div>

    <div class="button" @click="addProduct">add product</div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      productName: '',
      productPrice: '',
      posts: []
    }
  },
  methods: {
    addProduct () {
      const post = {
        name: this.productName,
        price: this.productPrice
      }
      this.$http.post('http://localhost:3000/products', post)
        .then(response => {
          return response.data
        })
        .then(clear => {
          this.productName = ''
          this.productPrice = ''
          alert('Product added')
        })
    }
  }
}
</script>

<style scoped>
.product .button {
  background-color: #C99E71;
  padding: 5px 10px;
  text-decoration-line: none;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Urbanist';
  border: 1px solid #fff;
  margin: 5px;
  cursor: pointer;
  text-transform: lowercase;
  width: 110px;
}
.product .product_image {
  width: 200px;
  height: auto;
}

</style>
