<template>
  <page
    class="envelope-expenses"
    :title="title"
    subtitle="Aqui você vê com o que você andou gastando"
  >
    <el-row :gutter="24">
      <el-col v-for="expense in envelope.expenses" :key="expense.description" :sm="24" :md="12" :lg="8">
        <el-card class="envelope-expenses__card">
          <div slot="header" class="envelope-expenses__card__header">
            <strong>{{ expense.description }}</strong>

            <el-dropdown
              class="envelope-expenses__card__header__actions"
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
          <div class="envelope-expenses__card__value">
            {{ $formatMoney(expense.value) }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </page>
</template>

<script>
import Page from '@/components/page/Page'

export default {
  name: 'EnvelopeExpenses',
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
    envelope () {
      const find = this.$store.getters['ENVELOPES/FIND_WITH_EXPENSES']
      return find(this.$route.params.slug)
    },
    title () {
      return `Gastos de ${this.envelope.label}`
    }
  },
  methods: {
    handleCommand (command, expense) {

    }
  }
}
</script>

<style lang="scss" scoped>
.envelope-expenses {
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
