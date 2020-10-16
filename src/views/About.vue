<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-date-picker v-model:value="value1" @change="onChange" />
    <div class="example">
      <a-pagination :default-current="1" :total="50" show-size-changer />
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";

export default {
  setup() {
    const value1 = ref(null);
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const { ctx } = getCurrentInstance();

    ctx.$http({ url: "/test", loading: true });

    return {
      value1,
      onChange,
    };
  },
  created() {
    // this.$http({ url: "/test" });
  },
};
</script>
