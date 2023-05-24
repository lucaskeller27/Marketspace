import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.gray}></View>
        <View style={styles.main}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.title}>marketspace</Text> 
          <Text style={styles.text}>Seu espaço de compra e venda</Text> 
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
  main: {
    display: 'flex',
    position: 'fixed', 
    top: '0', 
    backgroundColor: '#EDECEE',
    borderRadius: '20px',
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
  logo: {
    width: 100,
    marginTop: '20%',
    marginBottom: 20,
    height: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',

  },
});
