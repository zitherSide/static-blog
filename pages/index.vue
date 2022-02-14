<template>
  <v-main fluid>
    <v-row>
      <v-carousel cycle width="100%">
        <v-carousel-item v-for="(img, key) in imgs" :key="key" :src=img>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      imgs: [
        'images/jbm1.png',
        'images/flash_image_card1.png'
      ]
    }
  }
}
</script>
