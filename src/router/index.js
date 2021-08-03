import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/pembeli/Home.vue'
import Namabarang from '../views/barang/Namabarang.vue'
import Namapembeli from '../views/pembeli/Namapembeli.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/namabarang',
    name: 'Namabarang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Namabarang
  },
  {
    path: '/namapembeli/:id',
    name: 'Namapembeli',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Namapembeli
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
