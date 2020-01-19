<template>
  <div class="app">
    <div :class="['app__menu-wrapper', { 'app__menu-wrapper--show': showMenu }]">
      <app-menu />
    </div>
    <div v-if="showMenu" class="app__menu-backdrop" @click="closeMenu" />
    <div class="app__content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppMenu from '@/components/menu/Menu'

export default {
  components: {
    AppMenu
  },
  computed: {
    ...mapGetters({
      showMenu: 'CONFIGURATION/SHOW_MENU'
    })
  },
  methods: {
    ...mapActions({
      closeMenu: 'CONFIGURATION/TOGGLE_MENU'
    })
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
  }

  &__menu-backdrop {
    display: none;
  }

  &__content-wrapper {
    position: absolute;
    left: 300px;
    top: 0;
    bottom: 0;
    right: 0;
  }
}

@media (max-width: $sm-max) {
  .app {
    &__menu-wrapper {
      @media (max-width: $sm-max) {
        position: fixed;
        z-index: 11;
        left: -300px;
        transition: .3s;

        &--show {
          transform: translateX(300px);
        }
      }
    }

    &__menu-backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 10;
      transition: opacity .3s;
    }

    &__content-wrapper {
      @media (max-width: $sm-max) {
        left: 0;
      }
    }
  }
}
</style>
