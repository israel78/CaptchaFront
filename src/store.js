import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre: '', id: ''},
    captchaSettings: {
                      numCharact:0,
                      attemps:0,
                      alfa:false,
                      id:0
                      }

  },
  mutations: {
    setSettings(state,captchaSettings){
      state.captchaSettings = captchaSettings
    },
    setTarea(state, tarea){
      state.tarea = tarea
    },
    eliminarTarea(state, id){
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      } )
    }
  },
  actions: {
    getSettings({commit}){
      axios
          .get('http://localhost:8082/api/captcha/config/getsettings'
          ,{headers:{'Authorization':'123456','Content-Type':'application/x-www-form-urlencoded'}}
          ).then(response => (
              commit('setSettings', response.data)
          )).catch(error => console.log(error))
    },
    setSettings({commit},settings){
      axios
          .post('http://localhost:8082/api/captcha/config/setsettings'
          ,{'id':settings.id,'alfa':settings.alfa, 'attemps':settings.attemps, 'numCharact':settings.numCharact}
          ,{headers:{'Authorization':'123456','accept':'application/json'}})
          .then(response => (
         //     router.push({name: 'admin'}
                  console.log('')
          )).catch(error =>
          console.log(error)
      )
    },
  }
})
