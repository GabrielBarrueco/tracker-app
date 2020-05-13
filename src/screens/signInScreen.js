import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const signInScreen = ({ navigation }) => {
    return(
        <View>
            <Text>signInScreen Screen</Text>            
            <Button title="Go to SignUp" onPress={() => navigation.navigate('signUp')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        justifyContent: 'space-between'
    }
})

export default signInScreen