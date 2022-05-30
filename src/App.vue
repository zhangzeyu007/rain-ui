<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:31:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 14:00:09
 * @FilePath: \rain-ui\src\App.vue
-->
<script setup></script>

<template>
  <div>
    <rButton>默认按钮</rButton>
    <rButton type="success">默认按钮</rButton>
    <rButton type="warning" circle>默认按钮</rButton>
    <rInput v-model="val"></rInput>
    <h1>{{ val }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const val = ref("");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
