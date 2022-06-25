<template>
  <div>
    <div v-if="!loaded">
      <v-progress-circular v-if="!loaded" indeterminate color="primary" />
      <span>loading...</span>
    </div>
    <div v-else v-html="content" />
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
    console.log('mounted')
    const validPattern = /\/static-blog\/articles\/.*\.html$/
    if (!validPattern.test(this.$route.query.path)) {
      console.log('invalid URL')
      return
    }

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
