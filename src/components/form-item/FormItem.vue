<template>
  <div class="form-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormItem'
}
</script>

<style lang="scss" scoped>
.form-item {
  margin-bottom: 20px;

  > label {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
