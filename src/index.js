"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
// 引入路由配置
import routes from './router.config'
// 注册路由
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Buefy)

var router = new VueRouter({
    routes
})

new Vue({
    el : '#app',
    router,
    render : function(h){
        return h(App)
    }
})
