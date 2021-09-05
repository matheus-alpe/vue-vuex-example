import { updateArrayItem } from '@/utils'
import {
    SETUP_TAREFAS,
    CREATE_TAREFA,
    UPDATE_TAREFA,
    DELETE_TAREFA,
    SELECT_TAREFA,
    SET_ERRO
} from './mutation-types'

// mutations = responsável pela atualização do state
export default {
    // não pode ser assíncrono
    [SETUP_TAREFAS]: (state, payload) => {
        state.tarefas = payload
    },

    [CREATE_TAREFA]: (state, payload) => {
        state.tarefas.push(payload)
    },

    [UPDATE_TAREFA]: (state, payload) => {
        updateArrayItem(state.tarefas, 'id', payload)
    },

    [DELETE_TAREFA]: (state, payload) => {
        updateArrayItem(state.tarefas, 'id', payload, true)
    },

    [SELECT_TAREFA]: (state, payload) => {
        state.tarefaSelecionada = payload
    },

    [SET_ERRO]: (state, { erro }) => {
        state.erro = erro
    }
}