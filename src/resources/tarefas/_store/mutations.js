// mutations = responsável pela atualização do state
export default {
    // não pode ser assíncrono
    setTarefas(state, payload) {
        state.tarefas = payload
    }
}