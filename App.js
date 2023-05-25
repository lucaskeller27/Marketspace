import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.gray}/>
        <View style={styles.main}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.title}>marketspace</Text> 
          <Text style={styles.text}>Seu espaço de compra e venda</Text>
        </View>
        <View>
          <Text style={styles.textTwo}>Acesse sua conta</Text>
          <TextInput style={styles.input} placeholder='E-mail'/>
          <TextInput style={styles.input} placeholder='Senha'>
          </TextInput>
            <Image source={require('./assets/eye.png')} style={styles.eye}/>
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
  gray: {
    backgroundColor: '#EDECEE',
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    height: '20%',
    width: '100%',
  },
  logo: {
    width: 100,
    marginTop: '25%',
    marginBottom: '3%',
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  main: {
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    backgroundColor: '#EDECEE',
    borderRadius: '25px',
    height: '70%',
    width: '100%',
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
});
