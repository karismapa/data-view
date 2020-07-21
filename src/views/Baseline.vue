<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            vue-dashboard
          </v-list-item-title>
          <v-list-item-subtitle>
            Insert subtext here
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link :to="{path:'/'}">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{path:'/data'}">
          <v-list-item-action>
            <v-icon>mdi-call-split</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Data</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list dense>
          <v-list-item link :to="{path:'/about'}">
            <v-list-item-action>
              <v-icon>mdi-help-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="{path:'/login'}">
            <v-list-item-action>
              <v-icon>mdi-power</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>vue-dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            href="https://github.com/karismapa/vue-dashboard"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
        </template>
        <span>Github</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            href="https://codepen.io/johnjleider/pen/zgxeLQ"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-codepen</v-icon>
          </v-btn>
        </template>
        <span>Codepen</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
      <v-spacer></v-spacer>
      
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  };
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .4s;
  overflow: hidden;
}

.fade-enter-active {
  transition-delay: 1s;
  overflow: hidden;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  overflow: hidden;
}
</style>