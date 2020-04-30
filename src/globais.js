/**
 * Globais utilizados pelo sistema
 */
import { AsyncStorage } from 'react-native'
import moment from "moment"
import 'moment/locale/pt-br'

export const getOficina = () => {
  try {
    AsyncStorage.getItem('oficina').then(Oficina => {
      return JSON.parse(Oficina)
    })
  }
  catch (e) {
  }
}
export const getEmail = () => {
  AsyncStorage.getItem('email').then(Email => {
    return Email
  })
}

export const getRandom = () => {
  const min = 1
  const max = 100
  const rand = min + Math.random() * (max - min)
  return rand.toString()
}

// Período do Mês
moment.locale('pt-BR')
export const dataInicial = moment().startOf('month').format('L');
export const dataFinal = moment().endOf('month').format('L');

// Últimos 30 dias
export const dataInicial30 = moment().subtract(30, 'days').format('L');
export const dataFinal30   = moment().format('L');
