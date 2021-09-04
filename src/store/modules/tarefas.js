export default {
    // state = data
    state: {
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
        // não pode ser assíncrono
        setTarefas(state, payload) {
            state.tarefas = payload
        }
    },

    // actions = methods (que usam mutations para alterar o state)
    actions: {
        buscarTarefas: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, titulo: 'Aprender Vue', concluido: true },
                        { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                        { id: 3, titulo: 'Aprender Vuex', concluido: false }
                    ])
                }, 2000)
            })
        },
        
        listarTarefas: async (context) => {
            console.log('Actions: listarTarefas')
            const tarefas = await context.dispatch('buscarTarefas')
            console.log('Mutation: setTarefas')
            context.commit('setTarefas', tarefas)
        },
    }
}