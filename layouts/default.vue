<template>
  <v-app dark>
    <v-system-bar
      color="transparent"
      height="120"
      app
    >
      <v-toolbar-title class="text-h1 px-10" v-text="title" disabled/>
      <v-spacer />
      <preference-dialog/>
    </v-system-bar>

    <v-navigation-drawer
      color="transparent"
      :mini-variant="miniVariant"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
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

<script>
import prefereneDialog from "~/components/preferenceDialog.vue"

export default {
  compoents: {
    prefereneDialog
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Top',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-book',
          title: '失敗の本質を読んで',
          to: {
            path: '/articles/0',
            query: {
              path: this.$router.options.base + 'articles/QuintessenceOfFailure.html'
            }
          }
        },
        {
          icon: 'mdi-gamepad-variant',
          title: 'Japanese Businessman Simulator',
          to: '/articles/japanese_businessman_simulator'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Works'
    }
  }
}
</script>
