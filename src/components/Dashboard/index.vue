<template>
  <section class="container dashboard_container">
    <div class="admin_nav">
      <ul>
        <li><router-link to="/dashboard/add_posts">Add posts</router-link></li>
        <li><router-link to="/dashboard/posts_lists">posts list</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
