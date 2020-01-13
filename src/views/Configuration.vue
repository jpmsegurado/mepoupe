<template>
  <card-page
    title="Configurações"
    subtitle="Aqui você pode configurar os multiplicadores da metologia dos envelopes ou adicionar valores brutos"
    class="configs"
  >
    <el-form class="configs__form">
      <form-item>
        <label>Aposentadoria</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="10">
            <el-input v-model="form.retirement.percentage" v-money="percentageMask" />
          </el-col>

          <el-col class="text-center" :span="2">
            ou
          </el-col>

          <el-col :span="10">
            <el-input
              v-model="form.retirement.value"
              v-money="{}"
              @blur="clearPercentage('retirement')"
            />
          </el-col>
        </el-row>
      </form-item>

      <form-item>
        <label>Educação</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="10">
            <el-input v-model="form.education.percentage" v-money="percentageMask" />
          </el-col>

          <el-col class="text-center" :span="2">
            ou
          </el-col>

          <el-col :span="10">
            <el-input
              v-model="form.education.value"
              v-money="{}"
              @blur="clearPercentage('education')"
            />
          </el-col>
        </el-row>
      </form-item>

      <form-item>
        <label>Dívidas</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="10">
            <el-input v-model="form.installments.percentage" v-money="percentageMask" />
          </el-col>

          <el-col class="text-center" :span="2">
            ou
          </el-col>

          <el-col :span="10">
            <el-input
              v-model="form.installments.value"
              v-money="{}"
              @blur="clearPercentage('installments')"
            />
          </el-col>
        </el-row>
      </form-item>

      <el-button class="configs__form__submit" @click="submit">
        Salvar
      </el-button>

      <el-button class="configs__form__cancel">
        Cancelar
      </el-button>
    </el-form>
  </card-page>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPage from '@/components/page/CardPage'

export default {
  name: 'Configuration',
  components: {
    CardPage
  },
  data () {
    return {
      form: {
        education: {
          percentage: 0,
          value: 0
        },
        installments: {
          percentage: 0,
          value: 0
        },
        retirement: {
          percentage: 0,
          value: 0
        }
      },
      percentageMask: {
        decimal: '',
        thousands: '',
        prefix: '',
        suffix: ' %',
        precision: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      configs: 'CONFIGURATION/ALL'
    })
  },
  beforeMount () {
    this.loadAttributeFromStore('education')
    this.loadAttributeFromStore('installments')
    this.loadAttributeFromStore('retirement')
  },
  methods: {
    formatPercentageToInput (value) {
      return `${value * 100} %`
    },
    loadAttributeFromStore (attribute) {
      const isPercentage = this.configs[attribute].isPercentage
      if (isPercentage) {
        this.$set(this.form[attribute], 'percentage', this.formatPercentageToInput(this.configs[attribute].value))
      } else {
        this.$set(this.form[attribute], 'value', this.configs[attribute].value)
      }
    },
    clearPercentage (attribute) {
      this.$set(this.form[attribute], 'percentage', '0 %')
    },
    submit () {

    }
  }
}
</script>

<style lang="scss" scoped>
.configs {
  &__subtitle {
    color: $gray-text;
    margin: 0 0 20px;
  }

  &__form {
    &__submit {
      background-color: $primary;
      color: $white;
    }

    &__field-row {
      align-items: center;
      display: flex;
    }
  }
}
</style>
