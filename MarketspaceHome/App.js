import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/arrow.png')} style={styles.arrow}/>
        </View>
        <View style={styles.main}>
          <Image source={require('./assets/produto1.jpg')} style={styles.image}/>
          <View style={styles.person}>
            <Image source={require('./assets/avatar.png')} style={styles.pfp}/>
            <Text style={styles.personName}>Sara Marques</Text>
          </View>
          <Text style={styles.status}>NOVO</Text>
          <View style={styles.namePrice}>
            <Text style={styles.itemName}>Sapato</Text>
            <Text style={styles.itemPrice}>R$ 120,00</Text>
          </View>
          <View style={styles.textdiv}>
            <Text style={styles.text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.preco}>R$ 120,00</Text>
          <TouchableOpacity style={styles.buttonTwo}>
            <Image source={require('./assets/zapdois.png')} style={styles.zap}/>
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
    top: '1%',
    left: '7.5%',
    marginBottom: '3%',
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  person: {
    marginTop: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pfp: {
    width: '10%',
    height: '150%',
    marginLeft: '5%',
    marginRight: '1%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  status: {
    marginTop: '7.5%',
    marginLeft: '5%',
    border: '0px solid',
    borderWidth: '1%',
    borderRadius: 100,
    width: '12%',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: '#D9D8DA',
    color: '#403C42',
    padding: 3,
  },
  namePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7.5%',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 22,
    position: 'fixed',
    left: '5%',
  },
  itemPrice: {
    position: 'fixed',
    right: '5%',
    color: '#647AC6',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  image: {
    position: 'fixed',
    top: '8%',
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  zap: {
    height: 30,
    width: '15%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  main: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  preco: {
    position: 'fixed', 
    left: '7.5%',
    color: '#364D9D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    paddingTop: 10,
    textAlign: 'left',
    marginTop: '5%',
    marginLeft: '5%',
    color: '#3E3A40',
    fontSize: 15,
    width: '70%',
  },
  buttonTwo: {
    position: 'fixed',
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#647AC6',
    textAlign: 'center',
    borderRadius: 7,
    margin: 20,
    padding: 12,
    width: '46%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ButtonTwoText: {
    color: '#EDECEE',
    fontWeight: 'bold',
    textAlign: 'center',
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
});


export default App;