<template>
  <div>
    <h1>game: {{ data.game }}</h1>
    <div>title: {{ data.title }}</div>
    <img :src="data.img" alt="">
    <div>des: {{ data.description}}</div>
    <div>content: {{ data.content }}</div>
    <div>rating: {{data.rating }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data: {}
    }
  },
  created(){
    const data = this.$store.state.posts.posts;
    const id = this.$router.history.current.params.id;
    const findData = data.filter(item => item.id == id)
    this.data = {...findData[0]}
    console.log(this.data)
  }
}
</script>
