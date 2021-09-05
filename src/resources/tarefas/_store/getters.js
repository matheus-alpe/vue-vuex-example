// getters = computed
export default {
    tarefasConcluidas: (state) => {
        return state.tarefas.filter(tarefa => tarefa.concluido)
    },
    
    tarefasParaFazer: state => state.tarefas.filter(tarefa => !tarefa.concluido),
    
    totalTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    
    // closure
    buscarTarefaPorId: (state) => (id) => state.tarefas.find(tarefa => tarefa.id === id),
    
    boasVindas: (state, getters, rootState, rootGetters) => {
        return rootGetters.mensagemBoasVindas
    }
}