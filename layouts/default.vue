<template>
  <v-app dark>
    <v-system-bar
      color="transparent"
      height="120"
      app
    >
      <v-toolbar-title class="text-h1 px-10" v-text="title" disabled />
      <v-spacer />
      <preference-dialog />
    </v-system-bar>

    <v-navigation-drawer
      color="transparent"
      :mini-variant="miniVariant"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in topMenus"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="my-3"></v-divider>

      <v-list v-for="(category, i) in articles" :key="i">
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>
              <v-icon>{{getIcon(category.category)}}</v-icon>
              {{category.category}}
            </v-list-item-title>
          </template>
          <v-list-item v-for="item in category.items" :key="item.title" :to="item.to" router exact>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-btn
        icon
        right
        absolute
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import { bind } from 'lodash'
import { ArticleData } from '~/store/index'

const iconMap = {
  blog: 'mdi-book',
  game: 'mdi-gamepad-variant',
  app: 'mdi-app'
}

const convertPathQuery = (x: ArticleData, index: number, basePath: string, category: string) => {
  if (x.isRawHtml) {
    return {
      title: x.title,
      to: {
        path: `/articles/${category}${index}`,
        query: {
          path: `${basePath}${x.path}`
        }
      },
      icon: iconMap[x.category as keyof typeof iconMap]
    }
  } else {
    return {
      title: x.title,
      to: x.path,
      icon: iconMap[x.category as keyof typeof iconMap]
    }
  }
}

export default Vue.extend({
  data () {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'Works',
      topMenus: [
        {
          icon: 'mdi-home',
          title: 'Top',
          to: '/'
        },
        {
          icon: 'mdi-new-box',
          title: "What's new",
          to: '/recent'
        },
        {
          icon: 'mdi-format-list-bulleted',
          title: 'All articles',
          to: '/list'
        }
      ]
    }
  },
  computed: {
    articles () {
      const convert = bind(convertPathQuery, this, _, _, this.$router.options.base, _)
      const blogs = this.$store.getters['articles/get']
        .filter((x: ArticleData) => x.category === 'blog')
        .map(bind(convert, this, _, _, 'blog'))
      const apps = this.$store.getters['articles/get']
        .filter((x: ArticleData) => x.category === 'app')
        .map(bind(convert, this, _, _, 'app'))
      const games = this.$store.getters['articles/get']
        .filter((x: ArticleData) => x.category === 'game')
        .map(bind(convert, this, _, _, 'game'))

      return [
        {
          category: 'blog',
          items: blogs
        },
        {
          category: 'game',
          items: games
        },
        {
          category: 'app',
          items: apps
        }
      ]
    }
  },
  methods: {
    getIcon (category: string): string {
      return iconMap[category as keyof typeof iconMap]
    }
  }
})
</script>
