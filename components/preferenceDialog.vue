<template>
  <div>
    <v-menu offset-y :close-on-content-click="false">
      <template #activator="{on, attrs}">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Preferences</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-text class="px-2">Dark</v-list-item-text>
            <v-switch v-model="$vuetify.theme.dark" class="px-2"></v-switch>
          </v-list-item>
        </v-list>

      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
export default {
}
</script>
