<template>
  <v-parallax src="https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" height="2000">
    <span class="text-h2 mt-10 grey--text">Japanese Businessman Adventure</span>
    <v-divider class="my-3" />

    <image-card
      class="my-10"
      title="Download"
      img="images/jbm1.png"
      subtitle=""
      :hasButton="false"
      imageWidth="Auto"
    >
      ダウンロードはこちらから
      <v-card-actions>
        <v-btn class="ml-auto mt-auto white--text" href="https://drive.google.com/file/d/1_7YZibLcYHlPam_pBbRBN-dDKUhFM2oa/view?usp=sharing" depressed color="black">
          Download
          <v-icon color="red darken-2">
            mdi-download
          </v-icon>
        </v-btn>
      </v-card-actions>
    </image-card>

    <image-card
      class="my-10"
      title="Story"
      subtitle="Japanese Businessmanとして生きろ！"
      :isRightImage="true"
      img="https://picsum.photos/id/3/200/300"
      :hasButton="false">
      <v-card-text>
        休みの日だけど上司から電話が来た！
        ジャパニーズビジネスマンとしては無視するわけにはいかない！
        今日も今日とて休日出勤だ！
      </v-card-text>
    </image-card>
    <image-card
      class="my-10"
      title="How to play"
      subtitle="Xbox Controller, Mouse and Keyboard Supported"
      img="images/jbm_manual.png"
      :hasButton="false"
    >
      <ul>
        <li>
          Gamepad
          <ul>
            <li>
              移動: 左スティック
            </li>
            <li>
              カメラ移動: 右スティック
            </li>
            <li>
              話しかける: 十字キー↑
            </li>
            <li>
              ジャンプ:A
            </li>
            <li>
              ダッシュ: Rトリガー/Lトリガー
            </li>
            <li>
              攻撃: B / X
            </li>
            <li>
              ポーズ: スタート
            </li>
            <li>
              ゲームをやめる: セレクト
            </li>
          </ul>
        </li>
        <li>
          Mouse and Keyboard
          <ul>
            <li>
              移動: AWDS
            </li>
            <li>
              カメラ移動: 矢印キー
            </li>
            <li>
              話しかける: F
            </li>
            <li>
              ジャンプ: スペース
            </li>
            <li>
              ダッシュ: 左クリック
            </li>
            <li>
              攻撃: 右クリック
            </li>
            <li>
              ポーズ: Enter
            </li>
            <li>
              ゲームをやめる: Esc
            </li>
          </ul>
        </li>
      </ul>
      <v-card-actions>
        <v-btn class="ml-auto mt-auto white--text" href="../images/jbm_manual.png" depressed color="black">
          詳しく見る
          <v-icon color="red darken-2">
            mdi-exit-to-app
          </v-icon>
        </v-btn>
      </v-card-actions>
    </image-card>
  </v-parallax>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  },
  data () {
    return {
      test: 'test'
    }
  }
}
</script>
