import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ShowValuesView from '@/views/ShowValues/FormView.vue';
import HigherToLowerView from '@/views/HigherToLower/FormView.vue';
import Palindromes from '@/views/Palindromes/FormView.vue';
import SumView from '@/views/Sum/FormView.vue';
import SumNumericValuesView from '@/views/SumNumericValues/FormView.vue'; 

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'show-values-view',
      component: ShowValuesView
    },
    {
      path: '/higher-to-lower',
      name: 'higher-to-lower',
      component: HigherToLowerView
    },
    {
      path: '/palindromes',
      name: 'palindromes',
      component: Palindromes
    },
    {
      path: '/sum',
      name: 'sum',
      component: SumView
    },
    {
      path: '/sum-numeric-values',
      name: 'sum-numeric-values',
      component: SumNumericValuesView
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
