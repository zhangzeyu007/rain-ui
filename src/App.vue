<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:31:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 12:48:06
 * @FilePath: \rain-ui\src\App.vue
-->
<script setup>
import rbutton from "../packages/button/index";
</script>

<template>
  <div>
    <rbutton>默认按钮</rbutton>
    <rbutton type="success">默认按钮</rbutton>
    <rbutton type="warning" circle>默认按钮</rbutton>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
