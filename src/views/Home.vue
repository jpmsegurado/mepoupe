<template>
  <page title="Seus números" subtitle="Uma visão gerão de como está sua vida financeira" class="home">
    <el-row :gutter="24">
      <el-col v-for="item in items" :key="item.label" :sm="24" :md="12" :lg="8">
        <el-card class="home__card">
          <div slot="header" class="home__card__header">
            <strong>{{ item.label }}</strong>
          </div>
          <div class="home__card__value">
            {{ $formatMoney(item.value) }}
          </div>
        </el-card>
      </el-col>
    </el-row>
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
      return this.totalIncomes * this.configs.retirement
    },
    fun () {
      const rest = this.totalIncomes - this.totalExpenses
      const value = rest - this.education - this.installments - this.totalToInvest
      return value > 0 ? value : 0
    },
    education () {
      return this.totalIncomes * this.configs.education
    },
    installments () {
      return this.totalIncomes * this.configs.installments
    },
    items () {
      return [
        { label: 'Total rendas', value: this.totalIncomes },
        { label: 'Total despesas', value: this.totalExpenses },
        { label: 'Total a investir', value: this.totalToInvest },
        { label: 'Educação', value: this.education },
        { label: 'Dívidas', value: this.installments },
        { label: 'Lazer', value: this.fun },
        { label: 'Não se meta', value: this.totalIncomes * this.configs.dontMess }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__card {
    margin-bottom: 20px;

    &__value {
      font-size: 35px;
    }

    &__header {
      display: flex;
      align-items: center;

      &__actions {
        margin-left: auto;

        .el-button {
          font-size: 20px;
          height: 15px;
          padding: 0;
          color: $primary;

          i {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
