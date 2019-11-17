<template>
  <v-app id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<!-- <style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->

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