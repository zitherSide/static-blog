//@ts-ignore
import {getterTree} from "typed-vuex"
//@ts-ignore
import { ArticleData } from ".index.ts";

export const state = () => ({
  articles: [
    {
      title: '失敗の本質を読んで',
      path: 'articles/QuintessenceOfFailure.html',
      thumbnail: '',
      tags: ['management', 'book'],
      category: 'blog',
      createdAt: '2020-5-1'
    },
    {
      title: 'Ionicでアンドロイドアプリをつくって広告をつけるまで',
      path: 'articles/HowToCreateAndroidAppByIonic.html',
      thumbnail: '',
      tags: ['Ionic', 'Android'],
      category: 'blog',
      createdAt: '2020-5-1'
    },
    {
      title: 'Japanese Businessman Adventure',
      to: '/articles/japanese_businessman_simulator',
      thumbnail: '',
      tags: ['game', 'UnrealEngine', 'c++'],
      category: 'game',
      createdAt: '2020-5-1'
    }
  ] as ArticleData[]
})

export const getters = getterTree(state, {
  get: state => state.articles
})
