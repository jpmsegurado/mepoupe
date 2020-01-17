<template>
  <page
    class="envelopes"
    title="Envelopes"
    subtitle="Saiba quanto você tem disponível para esse mês"
    action-text="Adicionar envelope"
    @actionClick="openAddEnvelopePage"
  >
    <el-row :gutter="24">
      <el-col v-for="envelope in items" :key="envelope.label" :sm="24" :md="12" :lg="8">
        <el-card class="envelopes__card">
          <div slot="header" class="envelopes__card__header">
            <strong>{{ envelope.label }}</strong>

            <el-dropdown
              class="envelopes__card__header__actions"
              placement="bottom"
              @command="(command) => handleCommand(command, envelope)"
            >
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="commands.addExpense">
                  <i class="el-icon-plus" />
                  <span>Adicionar Gasto</span>
                </el-dropdown-item>

                <el-dropdown-item :command="commands.remove">
                  <i class="el-icon-delete" />
                  <span>Deletar</span>
                </el-dropdown-item>
              </el-dropdown-menu>
              <el-button type="text" icon="el-icon-more" />
            </el-dropdown>
          </div>
          <div class="envelopes__card__value">
            {{ $formatMoney(envelope.budget) }}
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
  name: 'Envelopes',
  components: {
    Page
  },
  data () {
    return {
      commands: {
        remove: 'remove',
        addExpense: 'addExpense'
      }
    }
  },
  computed: {
    ...mapGetters({
      items: 'ENVELOPES/ALL'
    })
  },
  methods: {
    ...mapActions({
      remove: 'ENVELOPES/REMOVE'
    }),
    openAddEnvelopePage () {
      this.$router.push({ name: 'add-envelope' })
    },
    openAddExpensePage () {
      this.$router.push({ name: 'add-expense' })
    },
    handleCommand (command, envelope) {
      const actions = {
        [this.commands.remove]: () => this.remove(envelope),
        [this.commands.addExpense]: () => this.openAddExpensePage(envelope)
      }

      return actions[command]()
    }
  }
}
</script>

<style lang="scss" scoped>
.envelopes {
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
