<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 13:32:06
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 13:56:16
 * @FilePath: \rain-ui\packages\input\index.vue
-->

<template>
  <div>
    <input type="text" :value="modelValue" @input="input" />
  </div>
</template>

<script>
export default {
  name: "rInput",
};
</script>
<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String | Number,
});

const input = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style lang="scss" scoped></style>
