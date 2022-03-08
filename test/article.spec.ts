import { ArticleData } from '~/store/index'
import { state, getters } from '~/store/articles'

describe('ArticleIFTest', () => {
  test('set_and_get', () => {
    const art: ArticleData = {
      title: 'title',
      path: 'path',
      thumbnail: '/uri/thumbnail',
      tags: ['tag1', 'tag2'],
      category: 'category',
      createdAt: new Date()
    }

    expect(art.title).toBe('title')
    expect(art.tags.length).toBe(2)
  })

  test('getAriticlesTest', () => {
    expect(getters.get(state())[0].title).toBe('失敗の本質を読んで')
  })
})
