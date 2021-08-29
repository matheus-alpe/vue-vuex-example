import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    // state = data
    state: {
        contador: 0,
        tarefas: [
            { id: 1, titulo: 'Aprender Vue', concluido: true },
            { id: 2, titulo: 'Aprender Vue Router', concluido: true },
            { id: 3, titulo: 'Aprender Vuex', concluido: false }
        ]
    },

    // getters = computedProperties
    getters: {
        tarefasConcluidas: state => state.tarefas.filter(tarefa => tarefa.concluido),
        tarefasParaFazer: state => state.tarefas.filter(tarefa => !tarefa.concluido),
        totalTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length
    }
})