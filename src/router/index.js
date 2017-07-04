import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Search from '@/components/Search';
import Game from '@/components/Game';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: Search
    },
    {
      path: '/game/',
      name: 'Game',
      component: Game
    }
  ]
});
