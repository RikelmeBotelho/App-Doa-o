import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  TextEmail: {
    width: "100%",
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: '#5e0505',
    marginTop: 5,
    marginBottom: 2,
    zIndex: 3,
    top: '38%',
    position: 'absolute',
  },

  TextSenha: {
    width: "100%",
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#5e0505',
    marginTop: 5,
    marginBottom: 1,
    zIndex: 3,
    bottom: '53%',
    position: 'absolute',
  },

  btnCadastro: {
    width: '30%',
    height: 40,
    backgroundColor: '#f74056',
    borderRadius: 20,
    justifyContent: 'center',
    color: '#0000',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#5e0505',
    bottom: '43%',
    zIndex: 3,
    position: 'absolute',
  },
  Visitante: {
    width: '50%',
    height: 40,
    backgroundColor: '#f74056',
    borderColor: '#5e0505',
    color: '#0000',
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    bottom: '-40%',
  },

  esqueciSenha: {
    justifyContent: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    bottom: '50%',
    position: 'absolute',
    zIndex: 3,
    color:'black',
  },
  Cadastrar: {
    justifyContent: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 290,
    bottom: '50%',
    position: 'absolute',
    zIndex: 3,
    color:'black',
  },
  Image: {
    width: 100,
    height: 100,
    top: '10%',
    position: 'absolute',
    zIndex: 3,
  },

});


export default styles