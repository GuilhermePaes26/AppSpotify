import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Playlist() {
    return (
        <View style={estilo.container}>
            <View style={estilo.header}>
                <Text style={estilo.titulo}>Suas Playlists</Text>
            </View>
            <View style={estilo.footer}>
                <View style={estilo.musicItem}>
                    <Image source={require('../assets/melhores.jpeg')} style={estilo.logo} />
                    <Text style={estilo.titleMusic}>Funk BR - Só as melhores</Text>
                </View>
            </View>
            <View style={estilo.footer}>
                <View style={estilo.musicItem}>
                    <Image source={require('../assets/melhores2.jpg')} style={estilo.logo} />
                    <Text style={estilo.titleMusic}>Funk BR - Só as melhores</Text>
                </View>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1ed760',
    },
    titleMusic: {
        color: '#191414',
        fontSize: 22,
        marginLeft: 10,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    logo: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
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
        flex: 1
    },
    musicItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20, 
    },
});
