<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:31:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 22:24:10
 * @FilePath: \rain-ui\src\App.vue
-->
<script setup></script>

<template>
  <div>
    <r-button type="warning" circle size="mini">mini按钮</r-button>
    <r-button type="primary" size="small">默认按钮</r-button>
    <r-button type="success" size="medium">默认按钮</r-button>
    <r-button type="success" size="medium" disabled>默认按钮</r-button>
    <r-button type="danger" size="medium" disabled>默认按钮</r-button>
    <r-input v-model="val"></r-input>
    <r-input v-model="val" size="medium" clearable></r-input>
    <r-input v-model="val" size="small"></r-input>
    <r-input v-model="val" size="mini"></r-input>
    <h1>{{ val }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const val = ref("");
</script>

<style lang="scss">
@import "./styles/style.scss";

#app {
  overflow: hidden;
}
</style>
