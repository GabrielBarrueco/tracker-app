import React, {useState, useContext} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'

import {Context as authContext} from '../context/authContext'

import AuthForm from '../components/AuthForm'

import Spacer from '../components/Spacer'

const signUpScreen = ({ navigation }) => {
    const {state, signUp} = useContext(authContext)
    
    return(
        <View style={styles.viewStyle}>
            <AuthForm 
                errorMessage={state.errorMessage}
                buttonText="Sign Up"
                headerText="Sign Up for Tracker"
                onSubmit={signUp}
            />
            
            <TouchableOpacity  style={styles.signInStyle} onPress={navigation.navigate('signIn')}>
                <Text style={styles.textSignInStyle} >Already have an account? Sign In!</Text>
            </TouchableOpacity>      
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },    

    signInStyle : {
        alignItems : 'center'        
    },

    textSignInStyle : {
        fontSize: 16,
        fontWeight: "500",
        color: 'blue'
    }
})

export default signUpScreen