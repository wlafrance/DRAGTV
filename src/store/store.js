import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        flavor: '',
        personas:
            [
                { id: 1, name: 'Hexa Dulce`', websites: [{ name: "facebook", url: "https://www.facebook.com/warren.lafrance" }, { name: "instagram", url: "http://instagram.com" }, { name: "warrenlafrance.com", url: "https://warrenlafrance.com" }] },
                { id: 1, name: 'Alexa Dulce`', websites: [{ name: "facebook", url: "https://www.facebook.com/warren.lafrance" }, { name: "instagram", url: "http://instagram.com" }, { name: "warrenlafrance.com", url: "https://warrenlafrance.com" }] }
            ]
        ,
        account: {
            firstName: 'Alec',
            middleName: 'C',
            lastName: 'LaFrance',
            nameSuffix: 'Jr',
            email: 'warren.lafrance@gmail.com',
            cellPhone: '5120000000',
            termsOfuse: true
        }
    },
    mutations: {
        restoreToInitialState(state, account) {
            state.account = account
        },
        change(state, flavor) {
            state.flavor = flavor
        },
    },
    getters: {
        personas: state => {
            return state.personas
        },
        personaById: (state) => (id) => {
            return state.personas.find(personas => personas.id === id)
        },
        userProfile: state => {
            return state.account
        }
    }
})