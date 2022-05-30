<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:43:58
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 18:20:53
 * @FilePath: \rain-ui\packages\button\index.vue
-->

<template>
  <button :class="isClass" :style="styles">
    <i>
      <span><slot></slot></span>
    </i>
  </button>
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
  disabled: Boolean,
  size: {
    type: String,
    default: "default",
  },
});
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
};

const isClass = computed(() => {
  return [
    "r-button",
    props.size == "medium"
      ? "r-button-medium"
      : props.size == "small"
      ? "r-button-small"
      : props.size == "mini"
      ? "r-button-mini"
      : "r-button",
    props.type ? `r-button-${props.type}` : "",
    props.disabled ? `is-disabled` : "",
    props.circle ? "is-circle" : "",
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : mBtnDeaultStyle,
  ];
});
</script>
<style lang="scss" scoped>
.r-button {
  display: inline-block;
  margin-left: 10px;
  outline: none;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  color: #606266;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
  margin-left: 10px;
  text-align: center;
  transition: 0.1s;
  padding: 12px 20px;
  border-radius: 4px;
  i {
  }
  span {
    display: inline-block;
  }
}
.r-button-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.r-button-mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.r-button-medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.r-button-default {
  background-color: #fff;
  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: #ecf5ff;
  }
}
.r-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.r-button-success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #fff;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.r-button-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.r-button-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.is-circle {
  border-radius: 20px;
}
.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
}
</style>
