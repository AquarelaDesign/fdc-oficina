import { AsyncStorage } from 'react-native'
import axios from 'axios'
import publicIP from 'react-native-public-ip'

const querystring = require('querystring')

const oapi = axios.create({
  baseURL: 'http://siare31.procyon.com.br:3125/cgi-bin/siarewebfdc.pl/wficha',
  timeout: 5000,
})

let wIP = '0.0.0.0'

publicIP().then(ip => {
  wIP = ip
})
.catch(error => {
})

oapi.interceptors.request.use(async config => {

  AsyncStorage.getItem('email').then(Email => {
    AsyncStorage.getItem('oficina').then(Oficina => {
      let codemp = ''
      if (Oficina !== undefined && Oficina !== null) {
        codemp = Oficina.codemp !== undefined && Oficina.codemp !== null ? Oficina.codemp : ''
      }

      config.params = querystring.stringify({
        widtrans: `${codemp}|1|9999|${Email}`,
        wip: wIP,
        wseqaba: 0,
      })
    })
  })
  return config
})

oapi.interceptors.response.use((response) => {
  return response
},(error) => {
  if (error.response !== undefined) {
    if (error.response.status === 401) {
      const requestConfig = error.config
      return axios(requestConfig)
    }
  }
  return Promise.reject(error)
})

export default oapi
