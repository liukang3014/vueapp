import Vue from "vue";
import VueRouter from "vue-router";

/* 
//两种写法同种作用
const login = () => import("@/views/login");
component: () => import("@/views/login"),
*/

Vue.use(VueRouter);

/*
引用跳转单页 
Vue实例名不能为roter
否则无法渲染
*/
const routes = [
  {
    path: "/",
    component: () => import("@/views/login"),
  },
  /* 主页 以及 其子路由 */
  {
    path: "/login",
    component: () => import("@/Layout/index"),
    redirect: "/dashboard",
    // children: [
    //   {
    //     path: "cai1",
    //     component: () => import("@/views/dashboard/cai1"),
    //   },
    //   {
    //     path: "cai2",
    //     component: () => import("@/views/dashboard/cai2"),
    //   },
    //   {
    //     path: "cai3",
    //     component: () => import("@/views/dashboard/cai3"),
    //   },
    //   {
    //     path: "cai4",
    //     component: () => import("@/views/dashboard/cai4"),
    //   },
    // ],
  },
  /* 将子路由单独配置 */
  {
    path: "/dashboard",
    component: () => import("@/Layout/index"),
    children: [
      {
        path: "/",
        component: () => import("@/views/dashboard/cai1"),
      },
      {
        path: "cai2",
        component: () => import("@/views/dashboard/cai2"),
      },
      {
        path: "cai3",
        component: () => import("@/views/dashboard/cai3"),
      },
      {
        path: "cai4",
        component: () => import("@/views/dashboard/cai4"),
      },
    ],
  },
  // {
  //   path: "/login",
  //   component: () => import("@/Layout/dashboard/cai1"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* 暴漏Vue实例 */
export default router;
