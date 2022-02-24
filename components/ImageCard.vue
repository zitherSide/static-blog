<template>
  <v-card width="100%" flat :color="color" elevation="0">
    <v-row>
      <v-col v-if="!isRightImage">
        <v-img :lazy-src="img" height="600"></v-img>
      </v-col>
      <v-col>
        <v-card-title class="white--text mb-3 text-h2">{{ title }}</v-card-title>
        <v-card-subtitle class="white--text mt-3">{{ subtitle }}</v-card-subtitle>
        <v-divider color="red"></v-divider>
        <v-card-text class="white--text">{{ content }}</v-card-text>
        <v-card-actions>
          <v-btn class="ml-auto mt-auto white--text" to="/inspire" depressed color="black">詳しく見る<v-icon color="red darken-2">mdi-exit-to-app</v-icon></v-btn>
        </v-card-actions>
      </v-col>
      <v-col v-if="isRightImage">
        <v-img :lazy-src="img" height="300"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: '#666666'
    },
    content: {
      type: String,
      default: 'sample Content'
    },
    title: {
      type: String,
      default: 'Sample Title'
    },
    subtitle: {
      type: String,
      default: 'Sample SubTitle'
    },
    img: {
      type: String,
      default: 'https://picsum.photos/id/11/10/6'
    },
    isRightImage: {
      type: Boolean,
      default: false
    }
  }
}
</script>