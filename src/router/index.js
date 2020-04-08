// User Registration is a primary view https://www.bing.com/videos/search?q=vue+router&view=detail&mid=D77990AE4EF708F651F4D77990AE4EF708F651F4&FORM=VIRE

import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/index'
import Dashboard from '../views/Dashboard'
import UserRegistration from '../views/UserRegistration'

// Persona, persona index and person details
import Profile from '../views/Profile'
import Personas from '../views/Personas'
import PersonaIndex from '../views/PersonaIndex'
import PersonaDetails from '../views/PersonaDetails'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta: {
      auth: false,
      title: 'Welcome'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: false,
      title: 'Dashboard'
    }
  },
  {
    path: '/personas',
    component: Personas,
    meta: {
      auth: false,
    },
    children: [
      {
        path: '/',
        name: 'personas',
        component: PersonaIndex,
        meta: {
          auth: false,
          title: 'Personas'
        }
      },
      {
        path: '/personaDetails/:id',
        name: 'personaDetails',
        component: PersonaDetails,
        meta: {
          auth: false,
          title: 'Persona Details'
        }
      }
    ]
  },
  {
    path: '/userRegistration',
    name: 'userRegistration',
    component: UserRegistration,
    meta: {
      auth: false,
      title: 'Account Registration'
    }
  },
  {
    path: '/Profile',
    name: 'profile',
    component: Profile,
    meta: {
      auth: false,
      title: 'Account Profile'
    }
  },
  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: false,
      title: 'About'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
