import { getterTree } from 'typed-vuex'
//@ts-ignore
import { Tag, Category } from './index.ts'

export const state = () => {
  return {
    tagColors: {
      book: '#DD4444',
      management: '#44CC44',
      Ionic: '#4444DD',
      'c++': '#CCCC44',
      UnrealEngine: '#888888',
      Android: '#CC44CC',
      Nuxt: '#33AA33'
    }
  }
}

export const getters = getterTree(state, {
  tagColors: state => state.tagColors
})
