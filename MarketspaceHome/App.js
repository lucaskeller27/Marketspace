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
        <View style={styles.header}>
          <Image source={require('./assets/arrow.png')} style={styles.arrow}/>
        </View>
        <Image source={require('./assets/produto1.jpg')} style={styles.image}/>
        <View style={styles.main}>
          <View style={styles.icon}>
            <Image source={require('./assets/avatar.png')} style={styles.pfp}/>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.preco}>R$ 120,00</Text>
          <TouchableOpacity style={styles.buttonTwo}>
            <Image source={require('./assets/zapzap.png')} style={styles.zap}/>
            <Text style={styles.ButtonTwoText}>Entrar em contato</Text>
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
  header: {
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    borderRadius: 15,
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    height: '20%',
    width: '100%',
  },
  footer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', 
    bottom: '0', 
    height: '12%',
    width: '100%',
  },
  arrow: {
    width: 30,
    position: 'fixed',
    top: '2%',
    left: '7.5%',
    marginBottom: '3%',
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  pfp: {
    width: 100,
    height: '80%',
    marginTop: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  image: {
    position: 'fixed',
    top: '10%',
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  zap: {
    height: 25,
    width: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  titlediv: {
    position: 'fixed',
    top: '12%',
    alignSelf: 'center',
  },
  main: {
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
    position: 'fixed',
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#647AC6',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 20,
    width: '46%',
    alignSelf: 'center',
  },
  ButtonTwoText: {
    color: '#EDECEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    position: 'fixed', 
    left: '7.5%',
    color: '#364D9D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});


export default App;