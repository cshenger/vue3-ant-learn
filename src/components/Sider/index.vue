<template>
  <a-layout-sider breakpoint="lg" :collapsed-width="collapsedWidth" :trigger="null" :collapsed="collapsed" @breakpoint="onBreakpoint" class="sider">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <template v-for="item in navs">
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="item.path">
            <span v-if="item.meta.icon" class="anticon"><i :class="item.meta.icon"></i></span>
            <span>{{ item.meta.title }}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" :collapsed="collapsed" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { routes } from "../../router/index";
import SubMenu from "./SubMenu";

export default {
  name: "Sider",
  components: {
    SubMenu,
  },
  props: {
    collapsed: Boolean,
  },
  setup() {
    const navs = ref(routes);
    let collapsedWidth = ref(80);
    const route = useRoute();
    let selectedKeys = ref([route.fullPath]);

    watch(
      () => route,
      (route) => {
        selectedKeys.value = [route.fullPath];
      },
      {
        immediate: true,
        deep: true,
      }
    );

    const onBreakpoint = () => {
      if (window.innerWidth > 650) {
        collapsedWidth.value = 80;
      } else {
        collapsedWidth.value = 0;
      }
    };

    return { navs, collapsedWidth, selectedKeys, onBreakpoint };
  },
};
</script>

<style lang="scss">
.sider {
  i.fa {
    font-size: 16px;
    position: relative;
    vertical-align: text-top;
  }
}
</style>