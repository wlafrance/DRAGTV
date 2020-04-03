import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// User Registration is a primary view https://www.bing.com/videos/search?q=vue+router&view=detail&mid=D77990AE4EF708F651F4D77990AE4EF708F651F4&FORM=VIRE
import UserRegistration from '../views/UserRegistration'

// Persona, persona index and person details
import Personas from '../views/Personas'
import PersonaIndex from '../views/PersonaIndex'
import PersonaDetails from '../views/PersonaDetails'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personas', 
    component: Personas,
    children: [
      {
        path: '/', 
        name: 'personas', 
        component: PersonaIndex
      },
      {
        path: '/personaDetails/:id', 
        name: 'personaDetails', 
        component: PersonaDetails,
      }
    ]
  },
  {
    path: '/userRegistration',
    name: 'userRegistration',
    component: UserRegistration
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
