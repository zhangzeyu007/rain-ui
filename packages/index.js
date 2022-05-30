/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-30 08:55:43
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 08:57:58
 * @FilePath: \rain-ui\packages\index.js
 */
import rButton from "./button/index";

const install = (app) => {
  app.use(rButton);
};

const RUI = {
  install,
};
// 按需导入
export { rButton };
// 全局导入
export default RUI;
