import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    // state = data
    state: {
        contador: 0,
        tarefas: []
    },

    // getters = computed
    getters: {
        tarefasConcluidas: state => state.tarefas.filter(tarefa => tarefa.concluido),
        tarefasParaFazer: state => state.tarefas.filter(tarefa => !tarefa.concluido),
        totalTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
        // closure
        buscarTarefaPorId: (state) => (id) => state.tarefas.find(tarefa => tarefa.id === id)
    },

    // mutations = responsável pela atualização do state
    mutations: {
        // before state snapshot
        listarTarefas(state, payload) {
            state.tarefas = payload
        }
        // after state snapshot
    }
})