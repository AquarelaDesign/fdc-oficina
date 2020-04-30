import { AsyncStorage } from 'react-native'

export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => {
  AsyncStorage.getItem('token').then(Token => {
    return Token
  })
}

export const login = token => {
  AsyncStorage.setItem('token', token)
}

export const logout = () => {
  AsyncStorage.removeItem('token')
}
