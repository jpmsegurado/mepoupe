<template>
  <div class="page">
    <div class="page__title">
      <h2 v-if="title" class="page__title__text">
        {{ title }}
      </h2>

      <el-button v-if="actionText" class="page__title__action" @click="handleActionClick">
        {{ actionText }}
      </el-button>
    </div>
    <p v-if="subtitle" class="page__subtitle">
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>

<script>
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

    &__text {
      margin: 0;
    }

    &__action {
      margin-left: auto;
      background-color: $primary;
      color: $white;
    }
  }

  &__subtitle {
    color: $gray-text;
  }
}
</style>
