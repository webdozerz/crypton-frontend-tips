<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      color="#202020"
      dark
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          class="template__link"
          tag="div"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      fixed
      elevate-on-scroll
      color="#202020"
      dark
    >
      <v-app-bar-nav-icon
        color="white"
        @click="toggleDrawer()"
      />
      <v-toolbar-title color="white">
        Crypton Frontend Flow
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon color="red darken-2">
          mdi-heart
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-card
        dark
        tile
        class="pa-2"
        min-height="100vh"
      >
        <nuxt />
      </v-card>
    </v-main>

    <v-footer
      app
      dark
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <a
          href="https://t.me/webdozerz"
          target="_blank"
        ><strong>Iliya Andrushov</strong></a>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Введение', icon: 'mdi-coffee-outline', path: '/' },
        { title: 'Начало работы', icon: 'mdi-timeline-check-outline', path: '/start' },
        { title: 'Стек технологий', icon: 'mdi-cog-outline', path: '/stack' },
        { title: 'Верстка', icon: 'mdi-page-layout-header', path: '/bem' },
        { title: 'Нейминг', icon: 'mdi-tag-text-outline', path: '/naming' },
        { title: 'Локализация', icon: 'mdi-format-text', path: '/i18n' },
        { title: 'Axios', icon: 'mdi-arrow-left-right', path: '/axios' },
        { title: 'Валидация', icon: 'mdi-form-textbox-password', path: '/validations' },
        // { title: 'NuxtJS', icon: 'mdi-nuxt', path: '/nuxt-js' },
      ],
      right: null,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style lang="scss" scoped>
.template {
  &__link {
    text-decoration: none !important;
  }
}
</style>
