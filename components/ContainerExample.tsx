// components/ContainerExample.tsx
import React from 'react';
import { View, Text } from 'react-native';

/* 
* View es un componente que permite contener otros elementos y darles un estilo.
* Es similar a un div en HTML.
* 
* Al contrario que en Flutter no se puede usar un View sin contenido, siempre debe contener algo.
*   <View></View> // Esto dará un error
*   <View><Text>Contenido</Text></View> // Esto es correcto
* 
* Podéis usar este componente para crear contenedores personalizados.
*/

const ContainerExample: React.FC = () => (
    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <View style={{ flex: 1, padding: 30, backgroundColor: '#10fAff' }}>
            {/* Contenido aquí */}
            <Text>Contenido de Container 1</Text>
        </View>
        <View style={{ flex: 2, padding: 30, backgroundColor: '#10ff0d' }}>
            {/* Contenido aquí */}
            <Text>Contenido de Container 2</Text>
        </View>
        <View style={{ flex: 3, padding: 30, backgroundColor: '#F000ff' }}>
            {/* Contenido aquí */}
            <Text>Contenido de Container 3</Text>
        </View>
        <View style={{ padding: 30, backgroundColor: '#fa050f' }}>
            {/* Contenido aquí */}
            <Text>Contenido de Container 4</Text>
        </View>
    </View>
);

export default ContainerExample;