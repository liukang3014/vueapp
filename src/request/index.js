/* 引用axios包 */
import axios from "axios";
/* 暴漏 axios 和 请求地址 */
export default axios.create({
  //响应超时时间设置
  timout: 2000,
  //设置请求地址
  baseURL: "https://www.chengzier.cn:8000/",
});
