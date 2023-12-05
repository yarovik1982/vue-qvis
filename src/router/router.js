//router.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
      path:'/',
      component:() => import('@/views/HomePage.vue'),
      name:'home'
   },
   {
      path:'/quiz',
      component:() => import('@/views/AppQvisPage.vue'),
      name:'quizes'
   },
   {
      path:'/quiz/:id',
      component:() => import('@/views/QuizItemPage.vue'),
      name:'quiz'
   },
   {
      path:'/other',
      component:() => import('@/views/AppOtherPage.vue'),
      name:'other'
   },
   {
      path:'/cars',
      component:() => import('@/views/CarsView.vue'),
      name:'cars',
   },
   {
      path:'/cars/:id',
      name: 'car',
      component: () => import('@/views/CarView.vue'),
      children:[
         {
            path:'contact',
            name:'contact',
            component: () => import('@/views/ContactView.vue')
         },
      ],
   },
   {
      path:'/:cathall(.*)*',
      name:'not-found-page',
      component: () => import('@/views/404View.vue')
   }
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
});

 
 export default router