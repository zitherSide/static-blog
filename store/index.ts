const Tags = {
  book: 'book',
  management: 'management',
  Ionic: 'Ionic',
  'c++': 'c++',
  UnrealEngine: 'UnrealEngine',
  Android: 'Android',
  Nuxt: 'Nuxt'
}

// export type Tag = 'book' | 'management' | 'Ionic' | 'c++' | 'UnrealEngine' | 'Android'
export type Tag = typeof Tags[keyof typeof Tags]
export const AllTags = Object.values(Tags)

const Categories = {
  blog: 'blog',
  agme: 'game',
  app: 'app'
}

// export type Category = 'blog' | 'game' | 'app'
export type Category = typeof Categories[keyof typeof Categories]
export const AllCategories = Object.values(Categories)

export interface ArticleData{
    title: string
    path: string
    isRawHtml: boolean
    thumbnail: string
    tags: Tag[]
    category: Category
    createdAt: Date
}
