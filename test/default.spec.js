import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Layout from '~/layouts/default.vue'
import preferenceDialog from '~/components/preferenceDialog'

Vue.use(Vuetify)

describe('defaultLayout', () => {
  let wrapper
  let articlesStoreMock
  let store
  let vuetify
  const routes = [{ path: '/' }]
  const router = new VueRouter({
    routes,
    base: '/base/'
  })

  beforeEach(() => {
    const localVue = createLocalVue()
    vuetify = new Vuetify()
    localVue.use(VueRouter)
    localVue.use(Vuex)
    localVue.use(Vuetify)
    localVue.use(preferenceDialog)
    articlesStoreMock = {
      namespaced: true,
      getters: {
        get: () => [
          {
            title: 'testGame',
            path: 'testPath',
            isRawHtml: false,
            thumbnail: '/uri/thumbnail',
            tags: ['tag1', 'tag2'],
            category: 'game',
            createdAt: new Date()
          },
          {
            title: 'testBlog',
            path: 'testPath',
            isRawHtml: true,
            thumbnail: '/uri/thumbnail',
            tags: ['tag1', 'tag2'],
            category: 'blog',
            createdAt: new Date()
          },
          {
            title: 'testGameRaw',
            path: 'testPathGame',
            isRawHtml: true,
            thumbnail: '/uri/thumbnail',
            tags: ['tag1', 'tag2'],
            category: 'game',
            createdAt: new Date()
          }
        ]
      }
    }
    store = new Vuex.Store({
      modules: {
        articles: articlesStoreMock
      }
    })
    wrapper = shallowMount(Layout, {
      localVue,
      router,
      store,
      vuetify
    })
  })

  const cFilter = (arr, search) => arr.filter(x => x.category === search)

  it('rowBlog', () => {
    const articles = wrapper.vm.articles
    expect(articles.length).toBe(3)

    expect(cFilter(articles, 'blog').length).toBe(1)
    const blogs = cFilter(articles, 'blog')[0].items
    expect(blogs.length).toBe(1)
    expect(blogs[0].title).toBe('testBlog')
    expect(blogs[0].to.path).toBe('/articles/blog0')
    expect(blogs[0].to.query.path).toBe('/base/testPath')
  })

  it('game', () => {
    const articles = wrapper.vm.articles
    expect(articles.length).toBe(3)

    expect(cFilter(articles, 'game').length).toBe(1)
    const games = cFilter(articles, 'game')[0].items
    expect(games.length).toBe(2)
    expect(games[0].title).toBe('testGame')
    expect(games[0].to).toBe('testPath')
  })

  it('rawGame', () => {
    const articles = wrapper.vm.articles
    expect(articles.length).toBe(3)

    expect(cFilter(articles, 'game').length).toBe(1)
    const games = cFilter(articles, 'game')[0].items
    expect(games[1].title).toBe('testGameRaw')
    expect(games[1].to.path).toBe('/articles/game1')
    expect(games[1].to.query.path).toBe('/base/testPathGame')
  })

  it('app', () => {
    const articles = wrapper.vm.articles
    expect(articles.length).toBe(3)

    expect(cFilter(articles, 'app').length).toBe(1)
    const apps = cFilter(articles, 'app')[0].items
    expect(apps.length).toBe(0)
  })
})
