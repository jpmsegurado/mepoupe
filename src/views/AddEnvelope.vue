<template>
  <card-page
    class="add-envelope"
    title="Adicionar Envelope"
  >
    <el-form class="add-envelope__form" @submit="submit">
      <form-item>
        <label>Descrição</label>
        <el-input v-model="form.label" />
      </form-item>

      <form-item>
        <label>Orçamento mensal</label>
        <el-input v-model="form.budget" v-money="{}" type="tel" />
      </form-item>

      <el-button class="add-envelope__form__submit" type="submit" @click="submit">
        Adicionar
      </el-button>
      <el-button class="add-envelope__form__cancel" @click="$router.push('/')">
        Cancelar
      </el-button>
    </el-form>
  </card-page>
</template>

<script>
import { mapActions } from 'vuex'
import { generateSlug } from '@/utils'
import CardPage from '@/components/page/CardPage'

export default {
  name: 'AddEnvelope',
  components: {
    CardPage
  },
  data () {
    return {
      form: {
        category: 'custom'
      }
    }
  },
  methods: {
    ...mapActions({
      addEnvelope: 'ENVELOPES/ADD'
    }),
    submit () {
      const form = { ...this.form }
      form.slug = generateSlug(form.label)
      form.budget = this.$currencyToNumber(form.budget)
      this.addEnvelope(form)
      this.$router.push({ name: 'envelopes' })
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
