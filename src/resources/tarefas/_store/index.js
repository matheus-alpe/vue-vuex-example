import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    // encapsula o escopo do módulo
    namespaced: true,
    
    state,
    getters,
    mutations,
    actions
}