<template>
  <div v-html="content">div tag</div>
</template>

<script>
export default {
  data: () => {
    return {
      content: '<h1>Loading</h1>'
    }
  },
  mounted () {
    fetch(this.$route.query.path)
      .then(data => data.text())
      .then((text) => { this.content = text })
      .catch((err) => { console.log(err) })
  }
}
</script>
