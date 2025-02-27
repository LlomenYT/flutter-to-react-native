import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type User = {
    key: string;
    name: string;
    email: string;
    avatarUrl: string;
};

const data: User[] = [
    {
        key: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
        key: '2',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
        key: '3',
        name: 'Michael Brown',
        email: 'michaelbrown@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    {
        key: '4',
        name: 'Emily White',
        email: 'emilywhite@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=4',
    }
];

const ListViewExample: React.FC = () => (
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                    <Image source={{ uri: item.avatarUrl }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.key}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 75,
        alignSelf: 'center',
    },
    cardContent: {
        padding: 15,
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#555',
    },
});

export default ListViewExample;