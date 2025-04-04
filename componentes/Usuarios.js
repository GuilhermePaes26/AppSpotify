import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function UsuarioPerfil() {
  return (
      <View style={estilo.container}>
            <View style={estilo.header}>
                <Text style={estilo.titulo}>Perfil de Usuário</Text>
            </View>
      

      <View style={estilo.perfilContainer}>
      <Image source={require('../assets/itachi.jpg')} style={estilo.fotoPerfil} />
        <Text style={estilo.nome}>Guilherme Paes</Text>
        <Text style={estilo.idade}>Idade: 17 anos</Text>
        <Text style={estilo.descricao}>
          Adoro todo tipo de música, dependendo da emoção que estou sentindo no momento – do funk para curtir usando lança até a pagode para lembrar da Vits.
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ed760',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
},
  perfilContainer: {
    backgroundColor: '#191414',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    backgroundColor: '#191414',
    alignItems: 'center',
    width: "100%",
    paddingVertical: 20,
},
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 15,
  },
  nome: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
  },
  idade: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginTop: 10,
  }
});
