import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import trackList from '../screens/trackListScreen'
import trackDetail from '../screens/trackDetailScreen'

const stack = createStackNavigator()

const trackRoutes = () => {
    return(
        <stack.Navigator>
            <stack.Screen name="trackList" component={trackList}/>
            <stack.Screen name="trackDetail" component={trackDetail}/>
        </stack.Navigator>
    )
}

export default trackRoutes