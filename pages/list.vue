<template>
  <div>
    <v-toolbar flat>
      <v-row>
        <v-col>
          <v-text-field v-model="search" outlined label="search">
            <v-icon>mdi-magnify</v-icon>
          </v-text-field>
        </v-col>
        <v-col md="4">
          <v-select
            v-model="searchCategories"
            outlined
            label="category"
            :items="categories"
            multiple
            chips
          />
        </v-col>
        <v-col md="4">
          <v-select
            v-model="searchTags"
            outlined
            label="tag"
            :items="tags"
            multiple
            chips
          />
        </v-col>
      </v-row>
    </v-toolbar>

    <v-data-table :headers="headers" :items="articles" :search="search" @click:row="jump">
      <template #[`item.tags`]="{ item }">
        <v-chip
          v-for="(tag, i) in item.tags"
          :key="i"
          :color="$store.getters['attributes/tagColors'][tag]"
          text-color="white"
        >
          {{ tag }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script lang='js'>
import { AllTags, AllCategories } from '~/store/index'
import { getters, state } from '~/store/articles'

export default {
  data: () => {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Category',
          value: 'category'
        },
        {
          text: 'Tags',
          value: 'tags'
        },
        {
          text: 'Date',
          value: 'createdAt'
        }
      ],
      search: '',
      searchTags: [],
      searchCategories: []
    }
  },
  computed: {
    articles () {
      return getters.get(state())
        .filter(item => this.searchCategories.includes(item.category))
        .filter(item => item.tags.some(tag => this.searchTags.includes(tag)))
    },
    tags () {
      return AllTags
    },
    categories () {
      return AllCategories
    }
  },
  mounted () {
    this.searchTags = this.tags
    this.searchCategories = this.categories
  },
  methods: {
    jump (item) {
      const to = item.isRawHtml
        ? {
            path: `/articles/${item.category}${this.articles.indexOf(item)}`,
            query: {
              path: `${this.$router.options.base}${item.path}`
            }
          }
        : item.path

      this.$router.push(to)
    }
  }
}
</script>
