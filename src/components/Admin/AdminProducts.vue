<template>
  <div class="container pt-2">

    <div class="productList">

      <div class="products"
      v-for="product of products"
      :key="product.id">
        <div>
          <img src="@/assets/popular_coffe_product.png" alt="">
        </div>
        <div class="product_name">
          <p> {{ product.id }}  <strong>{{ product.name }}</strong></p>
        </div>
        <div class="product_price">
          <p><strong>PRICE - <span>${{ product.price }}</span></strong></p>
        </div>
        <div>
            <button class="delete" @click="deleteProducts">DELETE PRODUCT</button>
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
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 450px;;
}
.products .button {
  background-color: #C99E71;
  padding: 10px 15px;
  text-decoration-line: none;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Urbanist'
}
.products img {
  width: 200px;
  height: auto;
}
.products a img {
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
.product_price span {
  /* color: #C99E71; */
}
.delete {
  width: 200px;
  height: 40px;
  padding: 0;
}

</style>

<script>
export default {
  data () {
    return {
      productName: '',
      productPrice: '',
      products: [],
      id: []
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
    },
    deleteProducts () {

      // this.$http.delete('http://localhost:3000/products')
    }
  },
  mounted () {
    this.showProducts()
  }
}
</script>
