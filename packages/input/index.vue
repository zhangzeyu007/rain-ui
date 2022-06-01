<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 13:32:06
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 22:53:53
 * @FilePath: \rain-ui\packages\input\index.vue
-->

<template>
  <div>
    <div class="r-input">
      <i></i>
      <input
        :class="isClass"
        class="r-input__inner"
        type="text"
        :value="modelValue"
        @input="iptChange"
        :disable="disabled"
        @change="change"
        @blur="blur"
        :placeholder="placeholder"
      />
      <transition name="slide-fade">
        <i
          class="clearable-icon iconfont m-icon-close"
          v-if="!showPassword && clearable && modelValue != ''"
          @click="clear"
        ></i>
      </transition>
    </div>
    <slot name="btn" />
  </div>
</template>

<script>
export default {
  name: "rInput",
};
</script>
<script setup>
import { computed, ref, useSlots } from "vue";
const emit = defineEmits(["update:modelValue", "clear", "focus", "blur"]);

const props = defineProps({
  modelValue: String | Number,
  disabled: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  type: String,
  size: {
    type: String,
    default: "",
  },
  placeholder: String,
});

const slot = useSlots();

const iptChange = (e) => {
  emit("update:modelValue", e.target.value);
  emit("input", e.target.value);
};

const change = (e) => {
  emit("change", e);
};

const blur = (e) => {};

const clear = (e) => {
  emit("update:modelValue", "");
  emit("clear");
};

const isClass = computed(() => {
  return [
    props.clearable
      ? "r-input-clearable"
      : props.size === "default"
      ? "r-input-default"
      : `r-input-${props.size}`,
    props.disabled ? "r-input-disabled" : "",
    props.type == "password"
      ? props.showPassword
        ? `r-input-password-showpassword-${props.size}`
        : `r-input-password-${props.size}`
      : "",
  ];
});
</script>

<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");
</style>

<style lang="scss" scoped>
.r-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  .r-input__inner {
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    outline: none;
    padding: 0 15px;
    transition: 0.2s;
    width: 100%;
  }
  .clearable-icon {
    font-size: 13px;
    top: 8px;
  }
  .clearable-icon {
    position: absolute;
    right: 10px;
    top: 15px;
    color: #94969b;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .r-input__inner::placeholder {
    color: #c6c8cc;
    font-size: 14px;
  }
  .r-input-small {
    height: 32px;
    line-height: 32px;
  }
  .r-input-mini {
    height: 28px;
    line-height: 28px;
  }
  .r-input-medium {
    height: 36px;
    line-height: 36px;
  }
}
</style>
