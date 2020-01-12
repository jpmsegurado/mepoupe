<template>
  <div class="page">
    <h2 v-if="title" class="page__title">
      {{ title }}
    </h2>
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

  &__subtitle {
    color: $gray-text;
  }
}
</style>
