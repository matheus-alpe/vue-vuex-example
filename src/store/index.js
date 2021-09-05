import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import global from './global'
import contador from '@/resources/contador/_store'

Vue.use(Vuex)

export default new Vuex.Store({
    ...global,
    modules: {
        contador
    }
})