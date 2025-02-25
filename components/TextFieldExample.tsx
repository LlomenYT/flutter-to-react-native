// components/TextFieldExample.tsx
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const TextFieldExample: React.FC = () => {
    const [text, setText] = useState<string>('');

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Escribe algo..."
            />
        </View>
    );
};

export default TextFieldExample;