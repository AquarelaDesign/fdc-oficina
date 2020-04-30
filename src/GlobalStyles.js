import { StyleSheet, Platform, StatusBar } from 'react-native'
import {
  Dimensions,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

const bg_color = '#0dbce3'
const im_color = 'rgba(135,206,250,1)'
const width = Dimensions.get('window').width

export const colors = ['#27a2b3', '#0DC9E3']
export const bg_colors = ['#218da3', '#1db5b8']
export const bg_start = { x: 1, y: 0.45 }
export const bg_end = { x: 0, y: 0.75 }
export const _url = 'https://www.fichadocarro.com.br'
export const ico_color = '#007189'

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  container: {
    flex: 1,
    backgroundColor: '#0DC9E3',
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  bglinear: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  box: {
    marginTop: 20,
    width: width / 3 - 20,
    height: 120,
    margin: 6,
    marginLeft: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  boxIcone: {
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 0,
  },

  boxText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 10,
    fontWeight: 'bold',
  },

  boxSpace: {
    height: 50,
  },

  boxButton: {
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 0,
    backgroundColor: '#27a2b3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  listaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#87CEEB',
    padding: 8,
    marginTop: 10,
  },

  lista: {
    height: 50,
    margin: 0,
    marginLeft: 0,
    justifyContent: 'flex-start',
  },

  lista1: {
    width: 90,
  },

  lista2: {
    width: 170,
  },

  lista3: {
    width: 70,
    alignItems: 'flex-end',
  },

  listaLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  }, 

  listaValor: {
    fontSize: 14,
    color: '#FFFFF0',
    fontWeight: 'bold',
  },
  
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

})

export const searchStyle = {
  containerStyle: {
    backgroundColor: bg_color, 
    borderWidth: 0, 
    borderRadius: 5,
    marginHorizontal: 5,
    height: 60,
    marginBottom: 5,
    marginTop: 5,
  },
  
  inputStyle: {
    backgroundColor: im_color
  },

  leftIconContainerStyle: {
    backgroundColor: bg_color
  },
  
  rightIconContainerStyle: {
    backgroundColor: bg_color
  },
  
  inputContainerStyle: {
    backgroundColor: bg_color
  },

}

export const listStyle = {
  header_style: {
    fontWeight: 'bold',
    backgroundColor: '#0db5e3', 
  },

  tab_style: {
    fontWeight: 'bold',
    backgroundColor: '#0d99bf', 
  },

  list: {
    flexGrow: 0,
  },

  listItem: {
    display: 'flex',
    width: Dimensions.get('window').width - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 10,
    height: 50,
  },
  
  listHeadText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF',
    textAlign: 'right',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  listIcon: {
    fontSize: 15,
    color: '#FFF',
  },

  listText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'right',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  
}

export const modalStyle = {
  boxIcone: {
    width: 40,
    height: 40,
    marginTop: 30,
    zIndex: 0, 
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 25,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  
  innerContainer: {
    alignItems: 'center',
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 8,
  },

  labelData: {
    fontWeight: 'bold',
    justifyContent: 'center',
    marginBottom: 8,
    color: '#f7ff00',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#D8D8D8', 
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

}