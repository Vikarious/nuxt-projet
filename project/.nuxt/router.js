import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c172531 = () => interopDefault(import('..\\pages\\AngularPage.vue' /* webpackChunkName: "pages/AngularPage" */))
const _fd2c14dc = () => interopDefault(import('..\\pages\\BootstrapVsTailwindPage.vue' /* webpackChunkName: "pages/BootstrapVsTailwindPage" */))
const _49b085ce = () => interopDefault(import('..\\pages\\ReactPage.vue' /* webpackChunkName: "pages/ReactPage" */))
const _030e40d5 = () => interopDefault(import('..\\pages\\VuePage.vue' /* webpackChunkName: "pages/VuePage" */))
const _bdd3efdc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AngularPage",
    component: _5c172531,
    name: "AngularPage"
  }, {
    path: "/BootstrapVsTailwindPage",
    component: _fd2c14dc,
    name: "BootstrapVsTailwindPage"
  }, {
    path: "/ReactPage",
    component: _49b085ce,
    name: "ReactPage"
  }, {
    path: "/VuePage",
    component: _030e40d5,
    name: "VuePage"
  }, {
    path: "/",
    component: _bdd3efdc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
