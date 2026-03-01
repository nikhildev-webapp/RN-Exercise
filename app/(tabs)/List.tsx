import { Link } from 'expo-router'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const List = () => {
    const fruit = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Mango' },
        { id: 4, name: 'Papaya' },
        { id: 5, name: 'Kiwi' },
        { id: 6, name: 'Guava' },
        { id: 7, name: 'Grapes' },
        { id: 8, name: 'Dragon Fruit' },
        { id: 9, name: 'Cherry' },
        { id: 10, name: 'Pineapple' }
    ]
    return (
        <>
            <View style={styles.container}>
                <Text>Fruit List</Text>
                <FlatList data={fruit} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Text>{item.name}</Text>} />
            </View>
            <Link href={'/'} style={styles.goBackBtn}>GoBack</Link>
        </>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    },
    goBackBtn: {
        borderWidth: 1,
        borderRadius: 10,
        width: 80,
        padding: 10,
        margin: 10,
        backgroundColor: 'cyan',
        color: 'black'
    }
})