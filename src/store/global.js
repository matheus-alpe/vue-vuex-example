export default {
    state: {
        usuario: 'Matheus'
    },

    getters: {
        mensagemBoasVindas: state => `Olá ${state.usuario}`
    },

    mutations: {
        setUsuario: (state, usuario) => {
            state.usuario = usuario
        }
    },

    actions: {
        logar: ({ commit }, usuario) => {
            commit('setUsuario', usuario)
        }
    }
}