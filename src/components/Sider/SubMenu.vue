<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props">
    <template v-slot:title>
      <span v-if="menuInfo.meta.icon" class="anticon"><i :class="menuInfo.meta.icon"></i></span>
      <span>{{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="item.path">
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item" :collapsed="collapsed" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    collapsed: Boolean,
  },
};
</script>

<style>
</style>