import Vue from 'vue';
import Router from 'vue-router';
import Stock from './views/Stock.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      alias: "/stocks",
      name: "stocks",
      component: Stock
    },
    {
      path: '/stocks',
      component: Stock
    },
    {
      path: '/orders',
      name: "order-list",
      component: () => import("./views/Orderlist.vue")
    },
    {
      path: '/about',
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: '/contact',
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/stock/:id",
      name: "stock-details",
      component: () => import("./views/Stocklist.vue")
    },
    {
      path: "/stockupdate/:id",
      name: "stock-updates",
      component: () => import("./views/Stockupdate.vue")
    },
    {
      path: "/stockadd",
      name: "stock-add",
      component: () => import("./views/Stockadd.vue")
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/history',
      name: 'history',
      // lazy-loaded
      component: () => import('./views/BookHistory.vue')
    }

  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
