<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Padrão de gerenciamento de estado centralizado no Vue.</p>
      </div>
    </div>

    <div class="container">
      <Contador />
      <TarefasLista />
    </div>
    
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue'
import TarefasLista from '@/components/TarefasLista.vue'

export default {
  name: 'App',
  components: {
    Contador,
    TarefasLista
  }
}
</script>

<style>
</style>