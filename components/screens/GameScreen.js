import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../Card'

function randomNumbers(max, min, exclude) {

    min = Math.ceil(min)
    max = Math.floor(max)
    const rndomNumber = Math.floor(Math.random() * (max - min) + min)
    if (rndomNumber === exclude) {
        randomNumbers(max, min, exclude)
    } else {
        return rndomNumber
    }

}

export default function GameScreen(props) {
    const { userChoice } = props
    const [currentGuess, setCurrentGuess] = useState(randomNumbers(1, 100, userChoice))
    return (
        <View style={styles.screen}>
            <Text>WINER NUMBER</Text>
            <View style={styles.numberContainer}><Text>{currentGuess}</Text></View>
            <Card style={styles.btnGroup}>
                <Button title="lower" onPress={() => {

                }} />
                <Button title="greater" onPress={() => {

                }} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {

        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 8,
        shadowColor: "grey",
        paddingRight: 12
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",

    },
    btnGruop: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        margin: 10,
        width: 300,
        maxWidth: "80%",
        

    },
})