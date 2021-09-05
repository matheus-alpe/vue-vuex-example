import * as types from './mutation-types'

// actions = methods (que usam mutations para alterar o state)
export default {
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
        console.log('Actions - state:', context.state, '\nActions - getters:', context.getters, '\nrootState:', context.rootState, '\nrootGetters:', context.rootGetters)

        console.log('Actions: listarTarefas')
        const tarefas = await context.dispatch('buscarTarefas')
        console.log('Mutation:', types.SETUP_TAREFAS)
        context.commit(types.SETUP_TAREFAS, tarefas)


        // root stuff
        //execute mutation root
        context.commit('setUsuario', 'Matheus Alves', { root: true })
        //execute action root
        context.dispatch('logar', 'Matheus Alves', { root: true })
    },
}