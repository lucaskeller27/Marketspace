import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  
  const [passwordConf, setPasswordConf] = useState('');
  const [hidePasswordConf, setHidePasswordConf] = useState(true);

  const togglePasswordConfVisibility = () => {
    setHidePasswordConf(!hidePasswordConf);
  };

  return (
    <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo}/>
        <View style={styles.titlediv}>
          <Text style={styles.title}>Boas vindas!</Text> 
          <Text style={styles.text}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
        </View>
        <Image source={require('./assets/emptypfp.png')} style={styles.pfp}/>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Nome"/>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput style={styles.input} placeholder="Telefone"/>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.buttonThree}>
              <Icon name={hidePassword ? 'eye' : 'eye-slash'} size={20} style={styles.eye} onPress={togglePasswordVisibility}/>
            </TouchableOpacity>
            <TextInput style={styles.inputTwo} placeholder="Senha" secureTextEntry={hidePassword} value={password} onChangeText={(text) => setPassword(text)} />
          </View>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.buttonThree}>
              <Icon name={hidePasswordConf ? 'eye' : 'eye-slash'} size={20} style={styles.eye} onPress={togglePasswordConfVisibility}/>
            </TouchableOpacity>
            <TextInput style={styles.inputTwo} placeholder="Confirmar senha" secureTextEntry={hidePasswordConf} value={passwordConf} onChangeText={(text) => setPasswordConf(text)} />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textThree}>Já tem uma conta?</Text>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.ButtonTwoText}>Ir para o Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDECEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 75,
    position: 'fixed',
    top: '2.5%',
    marginBottom: '3%',
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  pfp: {
    width: 100,
    height: '17%',
    marginTop: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  eye: {
    height: '10',
    position: 'fixed',
    right: 0,
    width: '20%',
    resizeMode: 'contain',
    color: '555',
    alignSelf: 'center',
  },
  titlediv: {
    position: 'fixed',
    top: '12%',
    alignSelf: 'center',
  },
  inputs: {
    width: '100%',
  },
  header: {
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    borderRadius: 15,
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    height: '69%',
    width: '100%',
  },
  footer: {
    display: 'flex',
    position: 'fixed', 
    bottom: '0', 
    height: '15%',
    width: '100%',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    color: '#5F5B61',
    fontSize: 15,
    width: '70%',
    alignSelf: 'center',
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
    width: '80%',
    color: '#ACA8AD',
  },
  inputTwo: {
    backgroundColor: '#F7F7F8',
    margin: 8,
    padding: 15,
    borderRadius: 7,
    alignSelf: 'center',
    width: '80%',
    color: '#ACA8AD',
  },
  buttonThree: {
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F7F7F8',
  },
  button: {
    backgroundColor: '#1A181B',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 12,
    width: '80%',
    alignSelf: 'center',
  },
  buttonTwo: {
    backgroundColor: '#D9D8DA',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 15,
    width: '80%',
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


export default App;