<template>
  <div class="container">
    <div class="home_container">
      <md-card v-for="(post, index) in addPost" :key="index">
        <md-card-meida md-ratio="16:9">
          <img :src="post.img" alt="">
        </md-card-meida>
        <md-card-header>
          <h2 class="title">{{ post.title }}</h2>
          <div class="md-subhead">
            <div> {{ post.description }}</div>
          </div>
        </md-card-header>
        <md-card-action>
          <app-button type="link" :linkTo="`/post/${post.id}`" :addClass="['small_link']">
            See review
          </app-button>
        </md-card-action>
      </md-card>
    </div>
  </div>
</template>

<script>
import posts from '../../assets/posts';

export default {
  data() {
    return {
      posts,
    }
  },
  computed: {
    addPost() {
      return this.$store.state.posts.posts
    }
  }
}
</script>

<style scoped>

</style>>
