import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '@/components/Home.vue'


export const routes = [{
    path: '/',
    name: 'Index',
    redirect: '/home/path',
    meta: {
      title: "首页",
      // icon: 'ant-design:home-outlined',
      icon: 'fa fa-home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "开始页面",
      icon: 'fa fa-snowflake-o'
    },
    children: [{
      path: "/home/path",
      component: () => import('../views/HelloWorld.vue'),
      meta: {
        title: "次级首页",
      }
    }],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "关于",
      icon: 'fa fa-user-circle-o'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

window.__asxiosPromiseArr = [];

router.beforeEach((to, from, next) => {
  // let token = store.state.token;
  // let MODELCODES = store.state.modelCodes;

  // if (token) {
  //   if (MODELCODES.length > 0) {
  //     showHideSidebar(router.options.routes);
  //   }
  //   next();
  // } else {
  //   if (to.path === '/login' || to.path === '/restpassword' || to.path === '/register') { //这就是跳出循环的关键
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  next();

  // 取消上一个路由的请求
  function cancelToken() {
    if (window.__asxiosPromiseArr) {
      window.__asxiosPromiseArr.forEach((ele, index) => {
        ele.cancel("cancel");
        delete window.__asxiosPromiseArr[index];
      });
    }
  }

  cancelToken();
});

export default router