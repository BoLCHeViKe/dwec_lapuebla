import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/01-reactividad' },
    { path: '/01-reactividad', component: () => import('../views/01-Reactividad.vue') },
    { path: '/02-directivas', component: () => import('../views/02-Directivas.vue') },
    // { path: '/03-condicionales', component: () => import('../views/03-Condicionales.vue') },
    // { path: '/04-listas', component: () => import('../views/04-Listas.vue') },
    // { path: '/05-eventos', component: () => import('../views/05-Eventos.vue') },
    // { path: '/06-formularios', component: () => import('../views/06-Formularios.vue') },
    // { path: '/07-computadas', component: () => import('../views/07-Computadas.vue') },
    // { path: '/08-watchers', component: () => import('../views/08-Watchers.vue') },
    // { path: '/09-ciclovida', component: () => import('../views/09-CicloVida.vue') },
    // { path: '/10-comunicacion', component: () => import('../views/10-Comunicacion.vue') },
    { path: '/11-mylist', component: () => import('../views/11-myList.vue') },
  ]
})

export default router

