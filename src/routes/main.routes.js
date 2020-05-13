import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import account  from '../screens/accountScreen'
import trackCreate from '../screens/trackCreateScreen'
import trackRoutes from './tracks.routes'

const tab = createBottomTabNavigator()

const mainRoutes = () => {
    return(
        <tab.Navigator >
            <tab.Screen name="account" component={account} />
            <tab.Screen name="Home" component={trackCreate}/>
            <tab.Screen name="tracks" component={trackRoutes} />
        </tab.Navigator>   
    )
}

export default mainRoutes