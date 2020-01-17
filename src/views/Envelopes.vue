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

            <el-dropdown class="envelopes__card__header__actions" placement="bottom">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <i class="el-icon-plus" />
                  <span>Adicionar Gasto</span>
                </el-dropdown-item>
              </el-dropdown-menu>
              <el-button type="text" icon="el-icon-more" />
            </el-dropdown>
          </div>
          <div class="envelopes__card__value">
            {{ $formatMoney(envelope.value) }}
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
  name: 'Envelopes',
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      items: 'ENVELOPES/ALL'
    })
  },
  methods: {
    openAddEnvelopePage () {
      this.$router.push({ name: 'add-envelope' })
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
