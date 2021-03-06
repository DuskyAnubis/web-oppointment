import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: resolve => require(['../views/home/Home.vue'], resolve),
      children: [
        {
          path: '/DictionaryManager',
          component: resolve => require(['../views/dictonary/Dictonary.vue'], resolve)
        },
        {
          path: '/HospitalInfo',
          component: resolve => require(['../views/hospital/Hospital.vue'], resolve)
        },
        {
          path: '/OrgnazitionManager',
          component: resolve => require(['../views/orgnazition/Orgnazition.vue'], resolve)
        },
        {
          path: '/PowerManager',
          component: resolve => require(['../views/permission/Permission.vue'], resolve)
        },
        {
          path: '/RoleManager',
          component: resolve => require(['../views/role/Role.vue'], resolve)
        },
        {
          path: '/UserManager',
          component: resolve => require(['../views/user/User.vue'], resolve)
        },
        {
          path: '/DoctorScheduling',
          component: resolve => require(['../views/scheduling/Scheduling.vue'], resolve)
        },
        {
          path: '/HospitalRegistered',
          component: resolve => require(['../views/registered/HospitalRegistered.vue'], resolve)
        },
        {
          path: '/RegisteredManager',
          component: resolve => require(['../views/registered/RegisteredManager.vue'], resolve)
        },
        {
          path: '/TakeOppointment',
          component: resolve => require(['../views/registered/TakeOppointment.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/login/Login.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
