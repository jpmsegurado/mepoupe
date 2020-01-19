<template>
  <page
    class="incomes"
    title="Receitas Fixos"
    subtitle="Aqui você adiciona as suas receitas recorrentes"
    action-text="Adicionar Receita"
    @actionClick="$router.push({ name: 'add-income' })"
  >
    <el-row :gutter="24">
      <el-col v-for="income in incomes" :key="income.label" :sm="24" :md="12" :lg="8">
        <el-card class="incomes__card">
          <div slot="header" class="incomes__card__header">
            <strong>{{ income.label }}</strong>

            <el-dropdown
              class="incomes__card__header__actions"
              placement="bottom"
              @command="(command) => handleCommand(command, income)"
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
          <div class="incomes__card__value">
            {{ $formatMoney(income.value) }}
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
      incomes: 'INCOMES/ALL'
    })
  },
  methods: {
    ...mapActions({
      removeincome: 'INCOMES/REMOVE'
    }),
    handleCommand (command, income) {
      const actions = {
        [this.commands.remove]: () => this.removeincome(income)
      }
      return actions[command]()
    }
  }
}
</script>

<style lang="scss" scoped>
.incomes {
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
