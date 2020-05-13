import React, {useState, useCallback} from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = ({Callback, headerText, errorMessage, onSubmit, buttonText}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>
            <Spacer >
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input 
                label="E-mail" 
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize="none" 
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <Spacer />
            <Spacer>
                <Button 
                    title={buttonText} 
                    onPress={() => onSubmit({email, password})} 
                />
            </Spacer>      
        </View>
    )
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red', 
        margin : 10, 
        fontSize: 16
    }, 
})

export default AuthForm