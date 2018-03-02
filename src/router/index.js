import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//主页
import Home from '@/views/home/Home'
import HomePage from '@/views/home/homePage/HomePage'
//咨询
import Information from '@/views/home/information/Information'
//听课
import Center from '@/views/home/attend/Center'
//做题
import Exercise from '@/views/home/exercise/Exercise'
//问答
import Answers from '@/views/home/answers/Answers'
//商城
import Shopping from '@/views/home/shopping/Shopping'
//个人中心
import Personal from '@/views/home/personal/Personal'
//关于我们
import About from '@/views/home/about/About'
//课程详情页
import Detail from '@/views/home/detail/Detail'
//播放页面
import Play from '@/views/home/play/Play'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: '/attend/center',
          name: 'Center',
          component: Center,
        },
        {
          path: '/information/Information',
          name: 'Information',
          component: Information,
        },
        {
          path: '/exercise/Exercise',
          name: 'Exercise',
          component: Exercise,
        },
        {
          path: '/answers/Answers',
          name: 'Answers',
          component: Answers,
        },
        {
          path: '/shopping/Shopping',
          name: 'Shopping',
          component: Shopping,
        },
        {
          path: '/personal/Personal',
          name: 'Personal',
          component: Personal,
        },
        {
          path: '/about/About',
          name: 'About',
          component: About,
        },
        {
          path: '/detail/Detail',
          name: 'Detail',
          component: Detail,
        },
      ]
    },
    {
      path: '/play/Play',
      name: 'Play',
      component: Play,
    },
  ]
})
