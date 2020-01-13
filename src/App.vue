<template>
  <div class="app">
    <div class="app__menu-wrapper">
      <app-menu />
    </div>
    <div class="app__content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/menu/Menu'

export default {
  components: {
    AppMenu
  }
}
</script>

<style lang="scss" scoped>

.app {
  &__menu-wrapper {
    position: absolute;
    width: 300px;
    top: 0;
    bottom: 0;
    left: 0;

    @media (max-width: $sm-max) {
      left: -300px;
    }
  }

  &__content-wrapper {
    position: absolute;
    left: 300px;
    top: 0;
    bottom: 0;
    right: 0;

    @media (max-width: $sm-max) {
      left: 0;
    }
  }
}
</style>
