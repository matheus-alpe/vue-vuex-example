<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>

        <h3 class="font-weight-light mt-4">Para Fazer ({{ tarefasParaFazer.length }})</h3>
        
        <ul class="list-group" v-if="tarefasParaFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasParaFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas ({{ totalTarefasConcluidas }})</h3>
        
        <ul class="list-group" v-if="totalTarefasConcluidas > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />


    </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex'
import { createNamespacedHelpers } from 'vuex'

// Module Register
import register from '../_store/register'

// Component
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'


const { mapState, mapGetters, mapActions } = createNamespacedHelpers('tarefas')

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined,
        }
    },

    computed: {
        //map namespaced module
        ...mapState(['tarefas']),
        ...mapGetters([
            'tarefasConcluidas',
            'tarefasParaFazer', 
            'totalTarefasConcluidas',
            'boasVindas'
        ]),
    },

    methods: {
        // ...mapMutations(['setTarefas']),
        // mutation com alias
        // ...mapMutations({
        //     carregarTarefas: 'setTarefas',
        //     loadTasks: (commit, payload, options) => {
        //         // do thing
        //         commit('setTarefas', payload, options)
        //     }
        // }),

        ...mapActions(['listarTarefas']),
        
        exibirFormularioCriarTarefa() {
            if (this.tarefaSelecionada) {
                this.tarefaSelecionada = undefined
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.tarefaSelecionada = tarefa
        },
        resetar() {
            this.exibirFormulario = false
            this.tarefaSelecionada = undefined
        }
    },

    async created() {
        // Registrando uso do módulo
        register(this.$store)

        // this.setTarefas([
        // // this.carregarTarefas([
        // // this.loadTasks([
        //     { id: 1, titulo: 'Aprender Vue', concluido: true },
        //     { id: 2, titulo: 'Aprender Vue Router', concluido: true },
        //     { id: 3, titulo: 'Aprender Vuex', concluido: false }
        // ])

        //actions
        await this.listarTarefas()
        console.log('Actions executadas!')

        console.log('Boas vindas:', this.boasVindas)
    }
}
</script>
