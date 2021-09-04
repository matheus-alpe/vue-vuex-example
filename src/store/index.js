import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import global from './global'
import contador from './modules/contador'
import tarefas from './modules/tarefas'

Vue.use(Vuex)

export default new Vuex.Store({
    ...global,
    
    modules: {
        contador,
        tarefas
    }
})