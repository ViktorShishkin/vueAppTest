<template>
  <div class="container pt-2">
  <!-- <button class="btn btn-primary" @click="showPosts">Show Posts</button> -->

    <ul class="list-group list-group-numbered">
      <div v-if="posts.length > 0">
        <li
        class="list-group-item"
        v-for="post of posts"
        :key="post"
        >
          <strong>{{ post.author }}</strong> - {{ post.body }}
        </li>
      </div>
      <div v-else>
        <h2>There are no active posts.</h2>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postAuthor: '',
      postBody: 2020,
      posts: []
    }
  },
  methods: {
    showPosts () {
      this.$http.get('http://localhost:3000/posts')
        .then(response => {
          return response.data
        })
        .then(posts => {
          this.posts = posts
        })
    }
  },
  mounted () {
    this.showPosts()
  }
}

</script>
