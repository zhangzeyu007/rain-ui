/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-30 13:32:15
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 13:37:28
 * @FilePath: \rain-ui\packages\input\index.js
 */
import rInput from "./index.vue";

rInput.install = (app) => {
  app.component(rInput.name, rInput);
};

export default rInput;
