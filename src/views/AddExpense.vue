<template>
  <card-page title="Novo Gasto Fixo" class="add-expense">
    <form :model="form" class="add-expense__form" @submit="submit">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.description" />
      </form-item>

      <form-item>
        <label>Valor</label>
        <el-input v-model="form.value" v-money="{}" />
      </form-item>

      <el-button class="add-expense__form__submit" @click="submit">
        Adicionar
      </el-button>
      <el-button class="add-expense__form__cancel">
        Cancelar
      </el-button>
    </form>
  </card-page>
</template>

<script>
import { mapActions } from 'vuex'
import CardPage from '@/components/page/CardPage'

export default {
  name: 'AddExpense',
  components: {
    CardPage
  },
  data () {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions({
      addExpense: 'EXPENSES/ADD'
    }),
    submit () {
      const form = { ...this.form }
      form.value = this.$currencyToNumber(form.value)
      this.addExpense(form)
      this.form = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.add-expense {
  &__form {

    &__submit {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
