<template>
  <v-card width="100%" flat :color="color" elevation="0">
    <v-row>
      <v-col v-if="!isRightImage" cols="6">
        <v-img :lazy-src="img" :height="imageWidth" :width="imageWidth" contain />
      </v-col>
      <v-col>
        <v-card-title class="white--text mb-3 text-h2">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="white--text mt-3">
          {{ subtitle }}
        </v-card-subtitle>
        <v-divider color="red" />
        <v-card-text class="white--text">
          <slot />
        </v-card-text>
        <v-card-actions v-if="hasButton">
          <v-btn class="ml-auto mt-auto white--text" :to="buttonTo" depressed color="black">
            { {buttonText }}
            <v-icon color="red darken-2">
              {{ buttonIcon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col v-if="isRightImage" cols="6">
        <v-img :lazy-src="img" :height="imageHeight" :width="imageWidth" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: '#333333'
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
      default: 'https://picsum.photos/id/11/620/480'
    },
    isRightImage: {
      type: Boolean,
      default: false
    },
    imageWidth: {
      type: String,
      default: '480'
    },
    imageHeight: {
      type: String,
      default: 'Auto'
    },
    buttonText: {
      type: String,
      default: '詳しく見る'
    },
    buttonTo: {
      type: String,
      default: '/inspire'
    },
    buttonIcon: {
      type: String,
      default: 'mdi-exit-to-app'
    },
    hasButton: {
      type: Boolean,
      default: true
    }
  }
}
</script>
