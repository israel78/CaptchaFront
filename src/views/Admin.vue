<template>
  <div>

      <div class="container">
        <div class="text-center">
          <router-link :to="{name: 'inicio'}">
            <img src="@/assets/admin.png" alt="" width="300px" height="300px">
          </router-link>
        </div>
        <h1>Ajustes para captcha</h1>
        <router-link :to="{name: 'login'}">
          <button class="btn btn-success btn-block">Ir al login</button>
        </router-link>
        <div class="container-fluid">
          <form class="form-inline"  @submit.prevent="procesarFormulario">>
            <label for="inlineFormEmail" class="m-2">Número de intentos</label>
            <input type="number" class="form-control m-2" id="inlineFormEmail"   v-model="captchaSettings.attemps">
            <label for="inlineFormPassword" class="m-2">Número de caracteres</label>
            <input type="number" class="form-control m-2" id="inlineFormPassword"  v-model="captchaSettings.numCharact">
            <div class="form-check m-2">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck"  v-model="captchaSettings.alfa">
              <label class="form-check-label"  for="inlineFormCheck">Alfanumérico</label>
            </div>
            <button type="submit" class="btn btn-primary m-2" >Actualizar</button>
            <p v-show="this.message">Actualizada configuración</p>
          </form>
        </div>
        </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'admin',
  data:() => ({
    message:false
  }),
  methods:{
    ...mapActions(['getSettings','setSettings']),
    procesarFormulario(){

    this.setSettings(this.captchaSettings)
      this.message=true;
      localStorage.removeItem("captcha")
      localStorage.removeItem("attemps")
    }
  },
  created(){
    this.getSettings()
  },
  computed:{
    ...mapState(['captchaSettings'])
  }
}
</script>
