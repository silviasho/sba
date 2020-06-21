import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
const NameList = props => {
    const { list, deleteitem } = props
    const deleteName = (item) => {
        
        deleteitem(currentNames => {
            console.log(1111)
            return currentNames.filter((name) => name.id !== item)
        })
    }
    return (
        <FlatList
            data={list}
            keyExtractor={(item, index) => item.id}
            renderItem={items => (
                <TouchableOpacity onPress={() => deleteName(items.item.id)}>
                    <View style={listStyles.name} >
                        <Text>{items.item.value}</Text>

                    </View>
                </TouchableOpacity>
            )}
        />


    )
}

const listStyles = StyleSheet.create({
    name: {
        backgroundColor: "pink",
        margin: 5,
        padding: 5,
        textAlign: "center"
    }
})
export default NameList