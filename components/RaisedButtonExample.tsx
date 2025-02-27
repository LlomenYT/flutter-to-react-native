// components/StyledButtons.tsx
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { RawButton } from 'react-native-gesture-handler';
import { showToast } from '../utils';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    borderRadius?: number;
    shadow?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    backgroundColor = '#007BFF',
    borderRadius = 10,
    shadow = false,
}) => {
    /* 
    * Pressable es un componente que permite detectar el evento de presionar un botón.
    * es de las mejores opciones para crear botones en React Native.
    * 
    * Os recomiendo crear un componente padre de botón que se encargue de la lógica de los botones
    * y que los botones hijos solo se encarguen de la presentación.
    * 
    * Podéis usar este de base y añadirle más propiedades para personalizarlo a vuestro gusto.
    */
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor, borderRadius },
                shadow ? styles.shadow : null,
                pressed ? styles.pressed : null,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const RaisedButtonExample: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Diferentes estilos de botones */}
            <CustomButton title="Sin borderRadius" onPress={() => { showToast('Botón pulsado') }} borderRadius={0} />
            <CustomButton title="Con borderRadius" onPress={() => { showToast('Botón pulsado') }} borderRadius={20} />
            <CustomButton title="Con sombra" onPress={() => { showToast('Botón pulsado') }} shadow />
            <CustomButton title="Rojo" onPress={() => { showToast('Botón pulsado') }} backgroundColor="#FF4136" />
            <CustomButton title="Verde" onPress={() => { showToast('Botón pulsado') }} backgroundColor="#2ECC40" />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#f5f5f5',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
    },
    noBorderRadius: {
        backgroundColor: '#007BFF',
    },
    withBorderRadius: {
        backgroundColor: '#007BFF',
        borderRadius: 20,
    },
    shadow: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        elevation: 5, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    blue: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
    },
    red: {
        backgroundColor: '#FF4136',
        borderRadius: 10,
    },
    green: {
        backgroundColor: '#2ECC40',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.7, // Efecto visual cuando se presiona
    },
});

export default RaisedButtonExample;