import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';
import NameList from './components/NameList'
import NameInput from "./components/NameInput"
import Header from './components/Header'
import GameScreen from './components/screens/GameScreen'
import StartGameScreen from './components/screens/startGameScreen'
export default function App() {

    // const [namesArry, setNamesArry] = useState([])
    // const [modalMode, setModalMode] = useState(false)

    // const addNameToArry = (name) => {
    //     console.log(12345)
    //     setNamesArry(newArr => [...newArr, { id: Math.random().toString() + name, value: name }])
    // }

    // const mmm = () => {
    //     setModalMode(true)
    // }
    const [userNumber, setUserNumber] = useState()
    const startGameHndler = (selectedNumber) => {
        setUserNumber(selectedNumber)
    }
    let content = <StartGameScreen onStartGame={startGameHndler}/>
    if (userNumber) {
        content = <GameScreen userChoice={userNumber}/>
    }
    return (
        <View style={styles.container}>
            <Header title="my app" />
           {content}

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});