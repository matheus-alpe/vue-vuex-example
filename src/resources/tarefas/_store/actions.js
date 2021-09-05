import TarefasService from '../_services/TarefasService'

import * as types from './mutation-types'

// actions = methods (que usam mutations para alterar o state)
export default {

    concluirTarefa: async ({ dispatch }, payload) => {
        const tarefa = Object.assign({}, payload)
        tarefa.concluido = !tarefa.concluido
        dispatch('editarTarefa', tarefa)
    },
    
    listarTarefas: async (context) => {
        try {
            const response = await TarefasService.getTarefas()
            context.commit(types.SETUP_TAREFAS, response.data)
        } catch (erro) {
            context.commit(types.SET_ERRO, { erro })
        }
    },

    criarTarefa: ({ commit }, payload) => {
        // exemplo com promise
        return TarefasService.postTarefa(payload)
            .then(response => commit(types.CREATE_TAREFA, response.data))
            .catch(erro => commit(types.SET_ERRO, { erro }))
    },

    editarTarefa: async ({ commit }, payload) => {
        try {
            await TarefasService.putTarefa(payload)
            commit(types.UPDATE_TAREFA, payload)
        } catch (erro) {
            commit(types.SET_ERRO, { erro })
        }
    },

    deletarTarefa: async ({ commit }, payload) => {
        try {
            await TarefasService.deleteTarefa(payload.id)
            commit(types.DELETE_TAREFA, payload)
        } catch (erro) {
            commit(types.SET_ERRO, { erro })
        }
    },

    selecionarTarefa: ({ commit }, payload) => {
        commit(types.SELECT_TAREFA, payload)
    },

    resetarTarefaSelecionada: ({ commit }) => {
        commit(types.SELECT_TAREFA, undefined)
    }
}