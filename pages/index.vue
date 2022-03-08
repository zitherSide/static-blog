<template>
  <v-main class="mx-2">
    <v-row>
      <v-carousel cycle width="100%">
        <v-carousel-item v-for="(img, key) in imgs" :key="key" :src="img" />
      </v-carousel>
    </v-row>
    <v-row>
      <v-card width="100%" flat class="my-15">
        <v-row>
          <v-col>
            <v-card-title class="mx-0 mb-3">
              Recent items
            </v-card-title>
            <v-card-subtitle>最新情報</v-card-subtitle>
          </v-col>
          <v-col>
            <v-card-actions>
              <v-btn class="ml-auto" to="/inspire" depressed color="white">詳しく見る<v-icon color="red darken-2">mdi-exit-to-app</v-icon></v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row v-for="(content, n) in contents" :key="n">
      <image-card color="#000000" :title="content.title" :subtitle="content.subtitle" :content="content.explanation" :isRightImage="n%2 === 0"/>
      <v-divider class="my-2" />
    </v-row>
  </v-main>
</template>

<script lang="ts">
import ImageCard from '@/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  },
  data () {
    return {
      imgs: [
        'images/jbm1.png',
        'images/flash_image_card1.png'
      ],
      contents: [
        {
          title: 'Games',
          subtitles: 'ゲーム',
          to: '/inspire',
          explanation: 'Unreal Engineなどで作ったゲームとか'
        },
        {
          title: 'Apps',
          subtitles: 'アプリ',
          to: '/inspire',
          explanation: '自作のAndroidアプリやWebアプリとか'
        },
        {
          title: 'Articles',
          subtitles: 'ブログ',
          to: '/inspire',
          explanation: '主に読書感想文'
        }
      ]
    }
  }
}
</script>
