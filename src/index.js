import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
// import Artists from '@/pages/Artists.vue'
// import Artist from '@/pages/Artist.vue'
// import Songs from '@/pages/Songs.vue'
// import Song from '@/pages/Song.vue'
// import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
//  { path: '/artists', component: Artists },
//  { path: '/artist/:id', component: Artist, props: true },
//  { path: '/songs', component: Songs },
//  { path: '/song/:id', component: Song, props: true },
//  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router