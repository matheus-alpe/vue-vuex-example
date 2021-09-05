import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import global from './global'
import contador from '@/resources/contador/_store'

Vue.use(Vuex)

export default new Vuex.Store({
    // Habilitando strict mode não permite realizar alteração sem usar mutation
    // Habilitar somente em development
    strict: process.env.NODE_ENV !== 'product',

    ...global,

    modules: {
        contador
    }
})