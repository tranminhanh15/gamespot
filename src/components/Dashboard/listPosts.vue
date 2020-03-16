<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Rating</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>
      <md-table-row v-for="(post, index) in posts" :key="index">
        <md-table-cell>{{ post.title }}</md-table-cell>
        <md-table-cell>{{ post.description }}</md-table-cell>
        <md-table-cell>{{ post.rating }}</md-table-cell>
        <md-table-cell>
          <div class="post_delete" @click="handleDelete(post.id)">
            Delete
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  methods: {
    handleDelete(id){
      this.$store.commit("posts/handleDelete", id)
    }
  }
}
</script>

<style scoped>

</style>
