/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:43:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 08:53:09
 * @FilePath: \rain-ui\packages\button\index.js
 */
import rButton from "./index.vue";

rButton.install = (app) => {
  app.component(rButton.name, rButton);
};

export default rButton;
