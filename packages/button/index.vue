<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:43:58
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 13:21:29
 * @FilePath: \rain-ui\packages\button\index.vue
-->

<template>
  <div :class="rClass">
    <button><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: "rButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  circle: {
    type: Boolean,
  },
});

const rClass = computed(() => {
  return [
    "r-button",
    `r-button-${props.type}`,
    props.circle ? "is-circle" : "",
  ];
});
</script>
<style lang="scss" scoped>
button {
  display: inline-block;
  outline: none;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  background-color: #fff;
  color: #606266;
  font-weight: 500;
  box-sizing: border-box;
  margin: 0;
  text-align: center;
  transition: 0.1s;
}
.r-button {
  display: inline-block;
  margin-left: 10px;
  button {
    padding: 12px 20px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
.r-button-default {
  button {
    background-color: #fff;
  }
}
.r-button-success {
  button {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.r-button-warning {
  button {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.is-circle {
  button {
    border-radius: 20px;
  }
}
</style>
