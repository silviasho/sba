import React, { useState } from 'react'
import { StyleSheet, View, Button, Modal } from 'react-native';
import { Input } from 'react-native-elements';

const NameInput = props => {
    const { addName, mode, setModalMode } = props
    const [name, setName] = useState("")

    const changeName = (nameInput) => {
        setName(nameInput)
    }

    const addNameHendler = () => {
        addName(name)
        setModalMode(false)
        setName("")

    }

    const cancel = () => {
        setModalMode(false)
        setName("")

    }
    return (
        <Modal visible={mode} animationType='slide'>
            <View style={styles.inputContainer}>
                <Input label='name' onChangeText={changeName} value={name} />
                <View style={styles.BTNGroup}>
                    <View  style={styles.btn}>
                        <Button title='add' onPress={addNameHendler} />
                    </View>
                    <View  style={styles.btn}>
                    <Button title='cancel' onPress={cancel} color="black"  />
                    </View>
                </View>
            </View>
        </Modal>

    );


}
const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        flex: 1,
        width: "80%"
    },
    BTNGroup: {
        flexDirection: "row",
        width: "80%",
        justifyContent: 'space-around',
        alignItems:'stretch'

    },
    btn: {
        flex: 1
    },
    cancelBtn:{
        color:"black",
        borderColor:"black",
        borderStartColor:"black"
    }
})
export default NameInput