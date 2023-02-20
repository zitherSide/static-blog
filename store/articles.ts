//@ts-ignore
import {getterTree} from "typed-vuex"
//@ts-ignore
import { ArticleData } from ".index.ts";

export const state = () => ({
  articles: [
    {
      title: '失敗の本質を読んで',
      path: 'articles/QuintessenceOfFailure.html',
      isRawHtml: true,
      thumbnail: '',
      tags: ['management', 'book'],
      category: 'blog',
      createdAt: '2020-5-1'
    },
    {
      title: 'Ionicでアンドロイドアプリをつくって広告をつけるまで',
      path: 'articles/HowToCreateAndroidAppByIonic.html',
      isRawHtml: true,
      thumbnail: '',
      tags: ['Ionic', 'Android'],
      category: 'blog',
      createdAt: '2020-5-1'
    },
    {
      title: 'Nuxt.jsで静的サイトを作ってGitHub Pagesにデプロイするまで',
      path: 'articles/HowToCreateNuxtStaticPageOnGitHubPages.html',
      isRawHtml: true,
      thumbnail: '',
      tags: ['Nuxt'],
      category: 'blog',
      createdAt: '2022-6-27'
    },
    {
      title: 'Japanese Businessman Adventure',
      path: '/articles/japanese_businessman_simulator',
      isRawHtml: false,
      thumbnail: '',
      tags: ['UnrealEngine', 'c++'],
      category: 'game',
      createdAt: '2020-5-1'
    },
    {
      title: 'Flash Image Card',
      path: '/articles/flash_image_card',
      isRawHtml: false,
      thumbnail: '',
      tags: ['Ionic', 'Android'],
      category: 'app',
      createdAt: '2020-5-1'
    },
    {
      title: 'Modern C++ Challenge を読んで調べてことを軽くまとめておく',
      path: 'articles/ModernCppChallenge.html',
      isRawHtml: true,
      thumbnail: '',
      tags: ['c++'],
      category: 'blog',
      createdAt: '2023-2-20'
    }
  ] as ArticleData[]
})

export const getters = getterTree(state, {
  get: state => state.articles
})
