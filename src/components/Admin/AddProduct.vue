<template>
  <div class="addProduct">
    <div class="container pt-2">
      <div class="post_image"><img src="@/assets/coffe_post.png" alt=""></div>
      <div class="form-group">
        <label for="name">Name product</label>
        <input type="text" id="name" class="form-control" v-model.trim="productName">
      </div>

      <div class="form-group p-20">
        <label for="price">Price product</label>
        <input type="text" id="price" class="form-control" v-model.number="productPrice">
      </div>

      <button class="btn btn-success" @click="addProduct">addProduct</button>

    </div>
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
        .then(postNew => {
          console.log(postNew)
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
.addProduct {
  max-width: 360px;
}
img {
  max-width: 200px;
  height: auto;
}
label {
  color: #ffffff;
}
</style>
