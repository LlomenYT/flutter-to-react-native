// components/TextFieldExample.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextFieldExample: React.FC = () => {
    const [text, setText] = useState<string>('');

    /* 
    * TextInput es un componente que permite al usuario ingresar texto.
    * Es similar a un TextField en Flutter.
    * 
    * Podéis usar este componente para crear campos de texto personalizados.
    * Al igual que en Flutter, podéis usar el estado para guardar el valor del campo de texto.
    * 
    * Podéis añadir más propiedades al TextInput para personalizarlo a vuestro gusto.
    */

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Escribe algo</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="Escribe algo..."
                    keyboardType="default" // Tipo de teclado
                    /* autoCapitalize="none" // No capitalizar
                    autoCorrect={false} // No corregir */
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});


export default TextFieldExample;