import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import contador from './modules/contador'
import tarefas from './modules/tarefas'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        usuario: 'Matheus'
    },

    getters: {
        mensagemBoasVindas: state => `Olá ${state.usuario}`
    },

    mutations: {
        setUsuario: (state, usuario) => {
            state.usuario = usuario
        }
    },

    actions: {
        logar: ({ commit }, usuario) => {
            commit('setUsuario', usuario)
        }
    },

    modules: {
        contador,
        tarefas
    }
})

console.log('Store:', store)

export default store;