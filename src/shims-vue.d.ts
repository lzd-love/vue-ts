/*
 * @Author: lzd
 * @Date: 2020-11-05 11:22:02
 * @LastEditors: lzd
 * @LastEditTime: 2020-11-05 16:00:48
 * @Description: content description
 */
import Vue from "vue";
import VueRouter from 'vue-router'
import {Route} from 'vue-router'
import {AxiosInstance} from "axios";

declare module "*.vue" {
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter,
    $route: Route,
    $axios: AxiosInstance,
    $md5: any,
    $moment: any,
    appConfig: any,
    $notify: any
  }
}

// declare module '@api*' {
//   const js:any;
//   export default js
// }