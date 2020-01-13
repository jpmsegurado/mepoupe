<template>
  <page title="Home">
    <p>Total despesas: {{ $formatMoney(totalExpenses) }}</p>
    <p>Total rendas: {{ $formatMoney(totalIncomes) }}</p>
    <p>Total a investir {{ $formatMoney(totalToInvest) }}</p>
    <p>Educação: {{ $formatMoney(education) }}</p>
    <p>Dívidas: {{ $formatMoney(installments) }}</p>
    <p>Lazer: {{ $formatMoney(fun) }}</p>
  </page>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '@/components/page/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      totalExpenses: 'EXPENSES/SUM',
      totalIncomes: 'INCOMES/SUM',
      configs: 'CONFIGURATION/ALL'
    }),
    totalToInvest () {
      return this.totalIncomes * 0.3
    },
    fun () {
      const rest = this.totalIncomes - this.totalExpenses
      const value = rest - this.education - this.installments - this.totalToInvest
      return value > 0 ? value : 0
    },
    education () {
      return this.totalIncomes * 0.05
    },
    installments () {
      return this.totalIncomes * 0.1
    }
  }
}
</script>
