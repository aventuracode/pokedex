import { View, Text } from 'react-native'
import React from 'react'
import AccountScreen from '../screens/Account'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen 
        name="Account"
        component={AccountScreen}
        options ={{title:"Mi Cuenta"}}
    />
</Stack.Navigator>
  )
}