<template>
  <card-page
    class="add-envelope"
    title="Adicionar Envelope"
  >
    <el-form class="add-envelope__form">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.description" />
      </form-item>

      <form-item>
        <label>Orçamento mensal</label>
        <el-input v-model="form.budget" v-money="{}" />
      </form-item>

      <el-button class="add-envelope__form__submit">
        Adicionar
      </el-button>
      <el-button class="add-envelope__form__cancel">
        Cancelar
      </el-button>
    </el-form>
  </card-page>
</template>

<script>
import CardPage from '@/components/page/CardPage'

export default {
  name: 'AddEnvelope',
  components: {
    CardPage
  },
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.add-envelope {
  &__form {
    &__submit {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
