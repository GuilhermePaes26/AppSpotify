import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Playlist() {
    return (
        <View style={estilo.container}>
            <View style={estilo.header}>
                <Text style={estilo.titulo}>Suas Playlists</Text>
            </View>
            
            {/* Lista de Playlists Existentes */}
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

            {/* Seção para Criar Nova Playlist */}
            <View style={estilo.newPlaylistContainer}>
                <Text style={estilo.newPlaylistTitle}>Criar Nova Playlist</Text>
                
                <TextInput
                    style={estilo.input}
                    placeholder="Digite o nome da playlist"
                    placeholderTextColor="#777"
                />
                
                <TouchableOpacity style={estilo.button}>
                    <Text style={estilo.buttonText}>Criar Playlist</Text>
                </TouchableOpacity>
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
        flex: 1,
    },
    musicItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20, 
    },
    newPlaylistContainer: {
        backgroundColor: '#191414',
        padding: 20,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    newPlaylistTitle: {
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 10,
        color: 'white',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1ed760',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: '#191414',
        fontSize: 18,
    },
});
