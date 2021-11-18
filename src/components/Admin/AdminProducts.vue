<script setup>
</script>

<template>
  <div class="container pt-2">

    <div class="productList">

      <div class="product"
      v-for="product in products"
      :key="product">
        <div>
          <img src="@/assets/popular_coffe_product.png" alt="">
        </div>
        <div class="product_name">
          <p> <span style="color:black;">{{ product.id }}</span>  <strong>{{ product.name }}</strong></p>
        </div>
        <div class="product_price">
          <p><strong>PRICE - <span>${{ product.price }}</span></strong></p>
        </div>
        <div>
          <button class="delete" @click="deleteProducts(product)">DELETE PRODUCT</button>
        </div>
      </div>
      <div v-if="products.length === 0">
        <h3>The product list is empty.</h3>
      </div>
    </div>
  </div>

</template>

<style scoped>

.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 450px;;
}
.product .button {
  background-color: #C99E71;
  padding: 10px 15px;
  text-decoration-line: none;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Urbanist'
}
.product img {
  width: 200px;
  height: auto;
}
.product a img {
  width: 24px;
  height: auto;
  margin-right: 5px;
}
.product_name {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  font-family: Righteous;
  padding-top: 15px;
}
.product_price {
  font-family: Urbanist;
  color: #ffffff;
}
.delete {
  width: 200px;
  height: 40px;
  padding: 0;
}

</style>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      productName: '',
      productPrice: '',
      products: []
    }
  },
  components: {

  },
  methods: {
    showProducts (products) {
      axios.get('http://localhost:3000/products')
        .then(response => {
          return response.data
        })
        .then(products => {
          this.products = products
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteProducts (product) {
      axios.delete('http://localhost:3000/products/' + product.id)
        .then((response) => {
          this.products = this.products.filter(p => p !== product)
        }, (response) => {
          console.log('error', response)
        }).then(_ => {
          // console.log(this.products.id)
        }).catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted () {
    this.showProducts()
  }
}
</script>
