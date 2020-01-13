<template>
  <div class="card-page">
    <el-card class="card-page__card">
      <template slot="header">
        <h2 class="card-page__title">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="card-page__subtitle">
          {{ subtitle }}
        </p>
      </template>
      <slot />
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'PageWithHeader',
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
.card-page {
  padding: 20px;

  &__card {
    max-width: 800px;
  }

  &__title {
    margin: 0;
    font-size: 20px;
  }

  &__subtitle {
    color: $gray-text;
    margin: 10px 0 0;
    font-size: 13px;
    line-height: 23px;
  }

}
</style>
