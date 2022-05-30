/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:31:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 09:08:50
 * @FilePath: \rain-ui\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./packages/index.js",
      name: "rain-ui",
    },
  },
});
