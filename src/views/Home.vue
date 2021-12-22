<template>
  <div>
    <h1>Lista de tareas</h1>
    <router-link :to="{name: 'login'}">
      <button class="btn btn-success btn-block">Ir al login</button>
    </router-link>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
  methods:{

  },
  created(){
  },
  computed:{
    ...mapState(['tareas'])
  }
}
</script>
