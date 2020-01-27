<template>
  <card-page class="add-envelope-expense" title="Adicionar gasto de envelope">
    <el-form class="add-envelope-expense__form" @submit="submit">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.description" />
      </form-item>

      <form-item>
        <label>Valor</label>
        <el-input v-model="form.value" v-money="{}" type="tel" />
      </form-item>

      <form-item>
        <label>Data do pagamento</label>
        <el-date-picker v-model="form.date" format="dd/MM/yyyy" />
      </form-item>

      <form-item>
        <label>Envelope</label>
        <el-select v-model="form.envelope" placeholder="Selecione um envelope">
          <el-option
            v-for="envelope in envelopes"
            :key="envelope.label"
            :label="envelope.label"
            :value="envelope.slug"
          />
        </el-select>
      </form-item>

      <el-button class="add-envelope-expense__form__submit" @click="submit">
        Adicionar
      </el-button>

      <el-button class="add-envelope-expense__form__cancel" @click="$router.push('/')">
        Cancelar
      </el-button>
    </el-form>
  </card-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardPage from '@/components/page/CardPage'

export default {
  name: 'AddEnvelopeExpense',
  components: {
    CardPage
  },
  data () {
    return {
      form: {
        envelope: this.$route.params.slug,
        date: new Date()
      }
    }
  },
  computed: {
    ...mapGetters({
      envelopes: 'ENVELOPES/ALL'
    })
  },
  methods: {
    ...mapActions({
      addEnvelopeExpense: 'ENVELOPES/ADD_EXPENSE'
    }),
    submit () {
      const form = { ...this.form, date: this.form.date.getTime() }
      form.value = this.$currencyToNumber(this.form.value)
      this.addEnvelopeExpense(form)
      this.$router.push({ name: 'envelopes' })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-envelope-expense {
  &__form {
    &__submit {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
