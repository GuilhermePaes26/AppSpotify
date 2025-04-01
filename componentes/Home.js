import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <View style={estilo.header}>
      <Image source={require('../assets/spotify.png')} style={estilo.logoSpot} />
        <Text style={estilo.titulo}>Spotify</Text>
      </View>
      <View style={estilo.footer}>
        <Image source={require('../assets/musica2.jpg')} style={estilo.logo} />
        <Text style={estilo.titleMusic}>THE BOX MEDLEY FUNK</Text>
        <Image source={require('../assets/play.jpg')} style={estilo.play} />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    backgroundColor: '#1ed760',
  },
  titleMusic : {
    color: '#191414',
    fontSize: 22,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  }, 
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center', 
    padding: 0,
    margin: 10,
    borderWidth: 2, 
    borderColor: '#000', 
    borderRadius: 10,
  },
  logoSpot : {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  play: {
    width: 300,
    height: 100,
    alignSelf: 'center', 
    padding: 0,
    margin: 0,
  },
  header: {
    backgroundColor: '#191414',
    alignItems: 'center',
    width: "100%", 
    paddingVertical: 20,
  },
  footer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1, 
  },
});
