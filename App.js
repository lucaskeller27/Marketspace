import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.title}>marketspace</Text> 
          <Text style={styles.text}>Seu espaço de compra e venda</Text>
        </View>
        <View>
          <Text style={styles.textTwo}>Acesse sua conta</Text>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <View style={styles.icon}>
            <Image source={require('./assets/eye.png')} style={styles.eye}/>
            <TextInput style={styles.inputTwo} placeholder="Senha"/>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textThree}>Ainda não tem acesso?</Text>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.ButtonTwoText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    marginTop: '25%',
    marginBottom: '3%',
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  eye: {
    position: 'fixed',
    right: 0,
    height: 40,
    width: '10%',
    resizeMode: 'contain',
  },
  header: {
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    backgroundColor: '#EDECEE',
    borderRadius: '25px',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    height: '70%',
    width: '100%',
  },
  footer: {
    display: 'flex',
    position: 'fixed', 
    bottom: '0', 
    height: '22%',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '157%'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  text: {
    textAlign: 'center',
    color: '#5F5B61',
    fontSize: 15,
  },
  textTwo: {
    textAlign: 'center',
    color: '#555157',
    fontSize: 15,
    marginBottom: 10,
    
  },
  input: {
    backgroundColor: '#F7F7F8',
    margin: 8,
    padding: 15,
    borderRadius: 7,
    alignSelf: 'center',
    width: '150%',
    color: '#ACA8AD',
  },
  inputTwo: {
    backgroundColor: '#F7F7F8',
    margin: 8,
    padding: 15,
    borderRadius: 7,
    alignSelf: 'center',
    width: '150%',
    color: '#ACA8AD',
  },
  buttonText: {
    color: '#F7F7F8',
  },
  button: {
    backgroundColor: '#647AC6',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 12,
    width: '150%',
    alignSelf: 'center',
  },
  buttonTwo: {
    backgroundColor: '#D9D8DA',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 15,
    width: '180%',
    alignSelf: 'center',
  },
  ButtonTwoText: {
    color: '#514D53',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textThree: {
    color: '#555157',
    textAlign: 'center',
  },
});