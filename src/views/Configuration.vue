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
          <el-col :span="14">
            <el-slider
              v-model="form.retirement"
              :format-tooltip="formatTooltip"
              :min="0"
              :step="1"
              :max="30"
            />
          </el-col>
        </el-row>
      </form-item>

      <form-item>
        <label>Educação</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="14">
            <el-slider
              v-model="form.education"
              :format-tooltip="formatTooltip"
              :min="0"
              :step="1"
              :max="5"
            />
          </el-col>
        </el-row>
      </form-item>

      <form-item>
        <label>Dívidas</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="14">
            <el-slider
              v-model="form.installments"
              :format-tooltip="formatTooltip"
              :min="0"
              :step="1"
              :max="10"
            />
          </el-col>
        </el-row>
      </form-item>

      <form-item>
        <label>Não se meta</label>
        <el-row class="configs__form__field-row" :gutter="24">
          <el-col :span="14">
            <el-slider
              v-model="form.dontMess"
              :format-tooltip="formatTooltip"
              :min="0"
              :step="1"
              :max="10"
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
import { mapGetters, mapActions } from 'vuex'
import CardPage from '@/components/page/CardPage'

export default {
  name: 'Configuration',
  components: {
    CardPage
  },
  data () {
    return {
      form: {
        education: 0.05,
        installments: 0.1,
        retirement: 0.3,
        dontMess: 0.1
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
    this.loadAttributeFromStore('dontMess')
  },
  methods: {
    ...mapActions({
      updateConfiguration: 'CONFIGURATION/UPDATE'
    }),
    loadAttributeFromStore (attribute) {
      this.form[attribute] = this.configs[attribute] * 100
    },
    formatTooltip (val) {
      return `${val} %`
    },
    buildObjectToStore (atribute) {
      return this.form[atribute] / 100
    },
    submit () {
      const configs = {
        education: this.buildObjectToStore('education'),
        installments: this.buildObjectToStore('installments'),
        retirement: this.buildObjectToStore('retirement'),
        dontMess: this.buildObjectToStore('dontMess')
      }

      this.updateConfiguration(configs)
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
