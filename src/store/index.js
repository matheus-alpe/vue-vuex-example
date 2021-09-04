import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import contador from './modules/contador'
import tarefas from './modules/tarefas'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        contador,
        tarefas
    }
})

console.log('Store:', store)

export default store;