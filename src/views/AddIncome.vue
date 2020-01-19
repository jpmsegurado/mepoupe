<template>
  <card-page title="Novo Renda Fixa" class="add-income">
    <el-form class="add-income__form" @submit="submit">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.description" />
      </form-item>

      <form-item>
        <label>Valor</label>
        <el-input v-model="form.value" v-money="{}" />
      </form-item>

      <el-button class="add-income__form__submit" type="submit" @click="submit">
        Adicionar
      </el-button>
      <el-button class="add-income__form__cancel" @click="$router.push('/')">
        Cancelar
      </el-button>
    </el-form>
  </card-page>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions({
      addIncome: 'INCOMES/ADD'
    }),
    submit () {
      const form = { ...this.form }
      form.value = this.$currencyToNumber(form.value)
      this.addIncome(form)
      this.$router.push('/')
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
