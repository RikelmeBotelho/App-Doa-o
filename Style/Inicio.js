import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  full: {
    backgroundColor: '#f0f0f0',

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f74056',
    padding: 15,
    height: 80,

  },

  logoText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 20
  },

  descubra: {
    backgroundColor: 'aqua',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 45,
    padding: 6
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    marginTop:30,
  },

  popUp: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 45,
    margin: 20

  },
  viewPopUP: {
    padding: 15,
    alignItems: 'center',
  },
  Titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },

  footer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  img: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#5e0505',
  },
  texto: {
    fontSize: 15,
  }

});

export default styles