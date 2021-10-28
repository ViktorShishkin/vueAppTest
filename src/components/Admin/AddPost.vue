<template>
  <div class="addPost">
    <div class="container pt-2">

      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" id="author" class="form-control" v-model.trim="postAuthor">
      </div>

      <div class="form-group p-20">
        <label for="body">Message</label>
        <input type="text" id="body" class="form-control" v-model.trim="postBody">
      </div>

      <button class="btn btn-success" @click="addPost">addPost</button>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      postAuthor: '',
      postBody: '',
      posts: [],
      showModal: false,
      httpStatus: null
    }
  },
  methods: {
    addPost () {
      const post = {
        author: this.postAuthor,
        body: this.postBody
      }
      this.$http.post('http://localhost:3000/posts', post)
        .then(response => {
          return response.data
        })
        .then(postNew => {
          console.log(postNew)
        })
        .then(clear => {
          this.postAuthor = ''
          this.postBody = ''
          alert('Post added')
        })
    }
  }
}
</script>

<style scoped>

.addPost {
  max-width: 360px;
}
label {
  color: #ffffff;
}
</style>
