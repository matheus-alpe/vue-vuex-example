// getters = computed
export default {
    tarefasConcluidas: (state, getters, rootState, rootGetters) => {
        console.log('Getters - state:', state, '\nrootState:', rootState, '\nrootGetters:', rootGetters)
        return state.tarefas.filter(tarefa => tarefa.concluido)
    },
    tarefasParaFazer: state => state.tarefas.filter(tarefa => !tarefa.concluido),
    totalTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    // closure
    buscarTarefaPorId: (state) => (id) => state.tarefas.find(tarefa => tarefa.id === id),
    boasVindas: (state, getters, rootState, rootGetters) => {
        // state.tarefas
        // getters.tarefasParaFazer
        console.log('State Global:', rootState.usuario)
        console.log('Getter Global:', rootState.mensagemBoasVindas)
        return rootGetters.mensagemBoasVindas
    }
}