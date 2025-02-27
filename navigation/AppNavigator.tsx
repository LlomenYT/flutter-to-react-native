import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {
    ContainerExample,
    ListViewExample,
    RaisedButtonExample,
    TextFieldExample
} from '../components';

type HomeScreenNavigationProp = {
    navigate: (screen: string) => void;
};

const HomeScreen: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                <Text style={styles.flutterColor}>Flutter</Text>

                <Text style={styles.reactNativeColor}> ➡️ React Native</Text>
            </Text>
            <Text style={styles.cardDescription}>
                Componentes de Flutter y su equivalente en React Native con Expo, si te apasiona Flutter pero se te está
                haciendo bola aprender React Native has encontrado la solución.
            </Text>
        </View>

        <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('ListView')}>
            <Text style={styles.optionTitle}>
                <Text style={styles.flutterColor}>ListView</Text>
                <Text style={styles.reactNativeColor}> - FlatList</Text>
            </Text>
            <Text style={styles.optionDescription}>Muestra una lista de elementos utilizando FlatList.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('TextField')}>
            <Text style={styles.optionTitle}>
                <Text style={styles.flutterColor}>TextField</Text>
                <Text style={styles.reactNativeColor}> - TextInput</Text>
            </Text>
            <Text style={styles.optionDescription}>Ejemplo de un campo de texto para ingresar información.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('RaisedButton')}>
            <Text style={styles.optionTitle}>
                <Text style={styles.flutterColor}>RaisedButton</Text>
                <Text style={styles.reactNativeColor}> - Pressable</Text>
            </Text>
            <Text style={styles.optionDescription}>Un botón interactivo con efecto de elevación.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate('Container')}>
            <Text style={styles.optionTitle}>
                <Text style={styles.flutterColor}>Container</Text>
                <Text style={styles.reactNativeColor}> - View</Text>
            </Text>
            <Text style={styles.optionDescription}>Un contenedor básico con padding y espaciado.</Text>
        </TouchableOpacity>

    </ScrollView>
);

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        ListView: ListViewExample,
        TextField: TextFieldExample,
        RaisedButton: RaisedButtonExample,
        Container: ContainerExample,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);

// Estilos
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
    },
    optionCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        marginBottom: 10,
    },
    optionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    optionDescription: {
        fontSize: 14,
        color: '#666',
    },
    flutterColor: {
        color: '#03A9F4',
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through',
    },
    reactNativeColor: {
        color: '#61DBFB',
    },
});