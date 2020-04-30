import { AsyncStorage } from 'react-native'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://168.194.69.79:3003',
  timeout: 5000,
})

api.interceptors.request.use(async config => {
  const wIP = '192.168.50.138'

  AsyncStorage.getItem('email').then(Email => {
    AsyncStorage.getItem('token').then(Token => {
      if (Token) {
        config.headers.Authorization = Token
      }
    })

    AsyncStorage.getItem('oficina').then(Oficina => {
      let codemp = ''
      if (Oficina !== undefined && Oficina !== null) {
        codemp = Oficina.codemp !== undefined && Oficina.codemp !== null ? Oficina.codemp : ''
      }

      config.params = {
        widtrans: `${codemp}|1|1|${Email}`,
        wip: wIP,
        wseqaba: 0,
      }
    })
  })

  return config
})

export default api
