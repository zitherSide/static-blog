<template>
  <v-parallax src="../imagesflash_image_card1.png">
    <span class="text-h2 mt-10 grey--text">Flash Image Card</span>
    <image-card
      title="Download"
      subtitle="Google Playからダウンロードできます"
      img="https://i.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE"
      :hasButton="false"
    >
      <v-card-actions>
        <v-btn class="ml-auto mt-auto white--text" href="https://play.google.com/store/apps/details?id=zitherSide.github.io.FlashImageCard" depressed color="black">
          Download
          <v-icon color="red darken-2">
            mdi-download
          </v-icon>
        </v-btn>
      </v-card-actions>
    </image-card>
  </v-parallax>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: { ImageCard },
  component: {
    ImageCard
  }
}
</script>
