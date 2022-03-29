<template>
  
  <div>
    <div v-if="!loaded">
      <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
      <span>loading...</span>
    </div>
    <div v-else v-html="content">
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      content: '',
      loaded: false
    }
  },
  mounted () {
    fetch(this.$route.query.path)
      .then(data => data.text())
      .then((text) => {
        this.content = text
        this.loaded = true
      })
      .catch((err) => { console.log(err) })
  }
}
</script>
