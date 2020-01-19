<template>
  <div class="menu">
    <router-link to="/">
      <h1 class="menu__title">
        Me Poupe
      </h1>
    </router-link>

    <el-menu class="menu__list">
      <router-link v-for="item in items" :key="item.label" :to="item.to">
        <el-menu-item :class="{ active: isActiveRoute(item.to) }">
          <i :class="item.iconClass" />
          <span>{{ item.label }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  computed: {
    items () {
      return [
        {
          iconClass: 'el-icon-house',
          label: 'Página Inicial',
          to: '/'
        },
        {
          iconClass: 'el-icon-data-line',
          label: 'Gastos Fixos',
          to: '/expenses'
        },
        {
          iconClass: 'el-icon-money',
          label: 'Rendas fixas',
          to: '/incomes'
        },
        {
          iconClass: 'el-icon-message',
          label: 'Envelopes',
          to: '/envelopes'
        },
        {
          iconClass: 'el-icon-setting',
          label: 'Configurações',
          to: '/configs'
        }
      ]
    }
  },
  methods: {
    isActiveRoute (to) {
      return this.$route.path === to
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;

  > a {
    text-decoration: none;
  }

  &__title {
    background-color: $primary;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    margin: 0;
    color: $white;
  }

  &__list {
    height: calc(100% - 60px);
    a {
      text-decoration: none;

      li:hover, li:focus, li.active {
        color: $primary;
        background-color: $activeMenu;
      }
    }
  }
}
</style>
