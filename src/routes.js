import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import signIn from './screens/signInScreen'
import signUp from './screens/signUpScreen'
import mainRoutes from './routes/main.routes'

const stack = createStackNavigator()

const Routes = () => {
    return(
        <stack.Navigator initialRouteName="signUp" screenOptions={ {headerShown: false} }>
            <stack.Screen name="signIn" component={signIn}/>
            <stack.Screen name="signUp" component={signUp}/>
            <stack.Screen name="Main" component={mainRoutes} />
        </stack.Navigator>
    )
}

export default Routes