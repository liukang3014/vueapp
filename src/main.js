import Vue from "vue";

import App from "./App.vue";

/* 引用router */
import router from "./router";
//引用ElementUI组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//引用 eventbus 进行传值
import eventbus from "@/eventbus";

//引用axios
import http from "@/request";
//将 axios 绑定入 Vue原形
Vue.prototype.$http = http;

//将 eventbus 绑定入Vue原型
Vue.prototype.$bus = eventbus;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
