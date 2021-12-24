<template>
  <div>
    <div class="container">
      <div class="text-center">
        <router-link :to="{name: 'inicio'}">
          <img src="@/assets/login.png" alt="">
        </router-link>
      </div>
      <h1>Login usuario</h1>
      <form class="form"  @submit.prevent="procesarFormulario">
        <div class="row">
          <div class="col">
            <label for="inlineFormEmail" class="m-2">Nombre</label>
            <input type="text" class="form-control m-2" id="inlineFormEmail"   v-model="name">
          </div>
          <div class="col">
            <label for="inlineFormPassword" class="m-2">Password</label>
            <input type="text" class="form-control m-2" id="inlineFormPassword"  v-model="pass">
          </div>

        </div>
        <div class="row">
          <div class="col">
            <label  for="inlineFormCaptcha" class="m-2" ><h3>Captcha - {{captcha}} <b v-show="showAttemps">Intentos - {{intentos}} de {{intentosMax}}</b></h3></label>
            <input type="text" class="form-control m-2" id="inlineFormCaptcha"  v-model="captchaIn">
          </div>
          <div class="col">
            <label  for="inlineFormLogin" class="m-2" >Entrar en la aplicación</label>
            <button type="submit" v-show="!showFinish&&!maxAttemps" id="inlineFormLogin" class="btn btn-primary m-2" >Login</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <h2 style="color: crimson">{{error}}</h2>
          <h2 style="color: green">{{aciertoMsg}}</h2>
          </div>
          <div class="col">
          <router-link v-show="showFinish" :to="{name: 'inicio'}">
            <button class="btn btn-success btn-block">Ir a la página principal</button>
          </router-link>
          <button v-show="maxAttemps" @click="resetPage" class="btn btn-danger btn-block">Intentar de nuevo</button>
          </div>
          </div>
      </form>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import axios from "axios";
import router from "../router";
axios.defaults.withCredentials = true
axios.defaults.headers =  {'Authorization': '123456'
  , 'accept': 'application/json'
  ,'Access-Control-Allow-Origin': '*'
  ,'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'}
axios.defaults.baseURL='https://captchaback.herokuapp.com/api/captcha'
//axios.defaults.baseURL='http://localhost:8082/api/captcha'
export default {
  name: 'admin',
  data:() => ({
    error: '',
    aciertoMsg:'',
    acierto : false,
    intentos: 0,
    name: null,
    pass: null,
    captchaIn: null,
    intentosMax: 1
  }),
  methods:{
    ...mapActions(['getCaptcha']),
    procesarFormulario() {
      axios
          .post('/app/login'
              , {'firstName': this.name, 'passw': this.pass, 'captcha': this.captchaIn}
          )
          .then(response => {
            localStorage.removeItem('captcha')
            localStorage.removeItem('attemps')
            this.aciertoMsg = 'Enhorabuena has conseguido logarte'
            this.error= '',
            this.acierto = true;

          }).catch((error) => {
            if(error. response) {
              this.intentosMax = localStorage.getItem('attemps')
              this.error = error.response.data.value
              this.intentos = error.response.data.key
            }
          }
      )
    },
    resetPage(){
      localStorage.removeItem('captcha')
      localStorage.removeItem('attemps')
      router.go(0);
    }
  },

  created(){
    this.getCaptcha()
    this.intentosMax = localStorage.getItem('attemps')
  },
  computed:{
    ...mapState(['captcha','attemps']),
    showFinish(){
      return this.acierto
    },
    maxAttemps(){
      if (this.intentosMax ==null)
        this.intentosMax=1;
      return this.intentosMax<=this.intentos
    },
    showAttemps(){
      return this.intentos>0
    }

  }
}
</script>
