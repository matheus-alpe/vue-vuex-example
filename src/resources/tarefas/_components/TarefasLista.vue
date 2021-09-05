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
                @editar="selecionarTarefaParaEdicao"
                @concluir="concluirTarefa"
                @deletar="confirmarRemocao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <h3 class="font-weight-light mt-4">Concluídas ({{ totalTarefasConcluidas }})</h3>
        
        <ul class="list-group" v-if="totalTarefasConcluidas > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao" 
                @concluir="concluirTarefa"
                @deletar="confirmarRemocao" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            @salvar="salvarTarefa" />

        <div class="alert alert-danger" v-if="erro">{{ erro.message }}</div>

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
        }
    },

    computed: {
        //map namespaced module
        ...mapState([
            'tarefaSelecionada',
            'erro'    
        ]),
        ...mapGetters([
            'tarefasConcluidas',
            'tarefasParaFazer', 
            'totalTarefasConcluidas',
            'boasVindas'
        ]),
    },

    methods: {
        ...mapActions([
            'concluirTarefa',
            'criarTarefa',
            'editarTarefa',
            'listarTarefas',
            'deletarTarefa',
            'selecionarTarefa',
            'resetarTarefaSelecionada'
        ]),

        confirmarRemocao(tarefa) {
            const confirmar = window.confirm('Deseja deletar essa tarefa?')
            if (!confirmar) return
            this.deletarTarefa(tarefa)
        },
        
        exibirFormularioCriarTarefa() {
            if (this.tarefaSelecionada) {
                this.resetarTarefaSelecionada()
                return
            }
            this.exibirFormulario = !this.exibirFormulario
        },
        async salvarTarefa({ operacao, tarefa }) {
            switch(operacao) {
                case 'criar':
                    await this.criarTarefa(tarefa)
                    break
                case 'editar':
                    await this.editarTarefa(tarefa)
                    break
            }
            this.resetar()
        },
        selecionarTarefaParaEdicao(tarefa) {
            this.exibirFormulario = true
            this.selecionarTarefa(tarefa)
        },
        resetar() {
            this.exibirFormulario = false
            this.resetarTarefaSelecionada()
        }
    },

    async created() {
        // Registrando uso do módulo
        register(this.$store)

        //actions
        await this.listarTarefas()
    }
}
</script>
