import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default function Card(props) {
    return <View style={{ ...styles.container, ...props.style }}>{props.children}</View>
}
const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        shadowRadius: 41,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 3 },
        backgroundColor: "white",
        elevation: 8,
        padding: 12,
        borderRadius: 15,
        alignItems: "center",
    }
})