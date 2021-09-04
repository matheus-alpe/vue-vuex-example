export default {
    // encapsula o escopo do módulo
    namespaced: true,

    state: {
        contador: 0
    },

    getters: {
        contadorAtual: state => state.contador
    }
}