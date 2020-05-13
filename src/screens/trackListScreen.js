import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const trackListScreen = ({navigation}) => {
    return(
        <View>
            <Text>track List Screen</Text>
            <Button title="Go to Detail" onPress={() => {navigation.navigate('trackDetail')}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default trackListScreen