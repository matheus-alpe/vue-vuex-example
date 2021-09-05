import {
    SET_TAREFAS
} from './mutation-types'

// mutations = responsável pela atualização do state
export default {
    // não pode ser assíncrono
    [SET_TAREFAS]: (state, payload) => {
        state.tarefas = payload
    }
}