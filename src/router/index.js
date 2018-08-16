import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/componentsDemos/HelloWorld'
import Highcharts from '@/componentsDemos/Highcharts'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/highcharts',
      name: 'Highcharts',
      component: Highcharts
    }
  ]
})
