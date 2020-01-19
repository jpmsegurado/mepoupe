<template>
  <page
    class="expenses"
    title="Gastos Fixos"
    subtitle="Aqui você adiciona aqueles que são recorrentes"
    action-text="Adicionar Gasto"
    @actionClick="$router.push({ name: 'add-expense' })"
  >
    <el-row :gutter="24">
      <el-col v-for="expense in expenses" :key="expense.label" :sm="24" :md="12" :lg="8">
        <el-card class="expenses__card">
          <div slot="header" class="expenses__card__header">
            <strong>{{ expense.label }}</strong>

            <el-dropdown
              class="expenses__card__header__actions"
              placement="bottom"
              @command="(command) => handleCommand(command, expense)"
            >
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="commands.remove">
                  <i class="el-icon-delete" />
                  <span>Deletar</span>
                </el-dropdown-item>
              </el-dropdown-menu>
              <el-button type="text" icon="el-icon-more" />
            </el-dropdown>
          </div>
          <div class="expenses__card__value">
            {{ $formatMoney(expense.value) }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Page from '@/components/page/Page'

export default {
  name: 'Expenses',
  components: {
    Page
  },
  data () {
    return {
      commands: {
        remove: 'remove'
      }
    }
  },
  computed: {
    ...mapGetters({
      expenses: 'EXPENSES/ALL'
    })
  },
  methods: {
    ...mapActions({
      removeExpense: 'EXPENSES/REMOVE'
    }),
    handleCommand (command, expense) {
      const actions = {
        [this.commands.remove]: () => this.removeExpense(expense)
      }
      return actions[command]()
    }
  }
}
</script>

<style lang="scss" scoped>
.expenses {
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
