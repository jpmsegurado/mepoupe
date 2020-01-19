<template>
  <div class="page">
    <div class="page__title">
      <el-button class="page__title__toggle" @click="toggleMenu">
        <i class="el-icon-s-unfold" />
      </el-button>
      <h2 v-if="title" class="page__title__text">
        {{ title }}
      </h2>

      <el-button
        v-if="actionText"
        class="page__title__action"
        @click="handleActionClick"
      >
        <span class="page__title__action__text">{{ actionText }}</span>
        <i class="el-icon-plus" />
      </el-button>
    </div>
    <p v-if="subtitle" class="page__subtitle">
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Page',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: null
    },
    actionText: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    ...mapActions({
      toggleMenu: 'CONFIGURATION/TOGGLE_MENU'
    }),
    handleActionClick () {
      this.$emit('actionClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 20px;

  &__title, &__subtitle {
    margin: 0 0 30px;
  }

  &__title {
    display: flex;

    &__toggle {
      display: none;
    }

    &__text {
      margin: 0;
    }

    &__action {
      margin-left: auto;
      background-color: $primary;
      color: $white;

      .el-icon-plus {
        display: none;
      }
    }
  }

  &__subtitle {
    color: $gray-text;
  }
}

@media (max-width: $sm-max) {
  .page {
    padding: 0 20px 20px;

    &__title {
      height: 60px;
      background-color: $primary;
      color: $white;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      right: 0;
      align-items: center;

      &__toggle {
        display: initial;

      }

      &__action, &__toggle {
        background-color: transparent;
        color: $white;
        border: 0;
        padding: 0;
        width: 60px;
        height: 60px;

        &__text {
          display: none;
        }

        .el-icon-plus, .el-icon-s-unfold {
          display: initial;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
