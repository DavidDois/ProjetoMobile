import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from 'react-native';

function BoasVindas(props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const [mostraMensagem, setMostraMensagem] = useState(false);

  const _aprensentarMensagem = () => {
    if (!nome == '' && !sobrenome == '') {
      setMostraMensagem(true);
    } else {
      Alert.alert(
        'Preenchimento obrigatório',
        'Informe o nome e o sobrenome!',
        [
          { text: 'Ok' },
        ],
      );
    }
  }

  const _limpar = () => {
    setNome('');
    setSobrenome('');
    setMostraMensagem(false);
  } 
  
  return (
    <View style={styles.header}>
      <Image source={{ uri: '' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eac038',
    paddingTop: 25,
    paddingBottom: 25,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: "center",
  },
  textos: {
     fontSize: 16,
     color: '#FFFFFF',
     fontWeight: 'bold',
     textAlign: "center",
  },
  campo: {
    backgroundColor: '#dcedff',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    height: 35,
  },
  botaoContainer: {
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
  },
});
export default BoasVindas;
