<script setup>

import AddProduct from './AddProduct.vue'

</script>

<template>
  <div class="container pt-2">

    <div class="productList">
      <AddProduct />

      <div class="product"
      v-for="product in products"
      :key="product">
        <div>
          <img class="product_image" src="@/assets/popular_coffe_product.png" alt="">
        </div>
        <div class="product_name">

          <p><span style="color:black; margin-right: 5px;">{{ product.id }}</span>
            <label for="name">Name product</label></p>
          <input type="text" id="name" class="form-control" v-model.trim="product.name">
        </div>
        <div class="product_price">
          <label for="price">Price product</label>
          <input type="text" id="price" class="form-control" v-model.number="product.price">
        </div>
        <div class="buttons">
          <div class="delete button" @click="deleteProducts(product)">DELETE</div>
          <div class="save button" @click="saveProduct(product)">SAVE</div>
        </div>
      </div>
      <div v-if="products.length == 0">
        <h3>The product list is empty.</h3>
      </div>
    </div>
  </div>

</template>

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
    AddProduct
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
    async saveProduct (product) {
      this.$http.put('http://localhost:3000/products/' + product.id, {
        name: product.name,
        price: product.price
      })
        .then(
          alert('Product saved')
        )
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

<style scoped>

.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  margin: 20px;
  border: 1px solid #fff;
}
.product .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
.product a img {
  width: 24px;
  height: auto;
  margin-right: 5px;
}
/* .product_name {
  color: #ffffff;
  text-align: center;
  font-family: Righteous;
  padding-top: 10px;
}
.product_price {
  font-family: Urbanist;
  color: #ffffff;
} */

</style>
