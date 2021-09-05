import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTarefas() {
        return api.get('/tarefas')
    },

    getTarefa(id) {
        return api.get(`/tarefas/${id}`)
    },

    postTarefa(tarefa)  {
        return api.post('/tarefas', tarefa)
    },

    putTarefa(tarefa) {
        return api.put(`/tarefas/${tarefa.id}`, tarefa)
    },

    deleteTarefa(id) {
        return api.delete(`/tarefas/${id}`)
    }
}