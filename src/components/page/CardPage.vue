<template>
  <div class="card-page">
    <el-card class="card-page__card">
      <template slot="header">
        <h2 class="card-page__title">
          {{ title }}
        </h2>
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

}
</style>
