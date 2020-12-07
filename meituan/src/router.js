import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import City from './pages/city/City'
import Order from './pages/order/Order'
import My from './pages/my/My'
import Menu from './pages/menu/Menu'
import Comment from './pages/comment/Comment'
import Restanurant from './pages/restanurant/Restanurant'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/my',
      name: 'My',
      component: My
    }, {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      props: true,
    }, {
      path: '/comment',
      name: 'Comment',
      component: Comment
    }, {
      path: '/restanurant',
      name: 'Restanurant',
      component: Restanurant
    }],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
