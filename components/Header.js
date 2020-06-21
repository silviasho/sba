import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = (props) => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "black",
        fontSize: 18
    }
})

export default Header