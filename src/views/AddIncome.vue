<template>
  <card-page title="Novo Renda Fixa" class="add-income">
    <form class="add-income__form">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.description" />
      </form-item>

      <form-item>
        <label>Valor</label>
        <el-input v-model="form.value" v-money="{}" />
      </form-item>

      <el-button class="add-income__form__submit">
        Adicionar
      </el-button>
      <el-button class="add-income__form__cancel">
        Cancelar
      </el-button>
    </form>
  </card-page>
</template>

<script>
import CardPage from '@/components/page/CardPage'

export default {
  name: 'AddIncome',
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
.add-income {
  &__form {

    &__submit {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
