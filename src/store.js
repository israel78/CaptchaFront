import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
Vue.use(Vuex)
axios.defaults.withCredentials = true
axios.defaults.headers =  {'Authorization': '123456'
    ,'Access-Control-Allow-Origin': '*'
    ,'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'}
//axios.defaults.baseURL='https://captchaback.herokuapp.com/api/captcha'
axios.defaults.baseURL='http://localhost:8082/api/captcha'
export default new Vuex.Store({
    state: {
        captchaSettings: {
            numCharact:0,
            attemps:0,
            alfa:false,
            id:0
        },
        captcha:'',
        maxAttemps:'',
        attemps: 0
    },
    mutations: {
        setSettings(state,captchaSettings){
            state.captchaSettings = captchaSettings
        },
        setCaptcha(state,captcha){
            localStorage.setItem('captcha',captcha)
            state.captcha = captcha
        },
        setMaxAttemps(state,attemps){
            localStorage.setItem('attemps',attemps)
            state.maxAttemps = attemps
        },
    },
    actions: {
        getSettings({commit}){
            axios
                .get('/config/getsettings'
                    , {headers: {'Authorization': '123456', 'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then(response => (

                commit('setSettings', response.data)

            )).catch(error => console.log(error))

        },
        getCaptcha({commit}){
            if (localStorage.getItem('captcha')==null) {
                axios
                    .get('/app/getcaptcha'
                    ).then(response => {
                    commit('setCaptcha', response.data.key)
                    commit('setMaxAttemps', response.data.value)
                     } ).catch(error =>
                    console.log(error)
                )
            }else{
                commit('setCaptcha',localStorage.getItem('captcha'))
            }
        },
        setSettings({commit},settings){
            axios
                .post('/config/setsettings'
                    ,{'id':settings.id,'alfa':settings.alfa, 'attemps':settings.attemps, 'numCharact':settings.numCharact})
                .then(response => (
                    router.push({name: 'admin'})
                )).catch(error =>
                    console.log(error)
                )

        },
    }
})
