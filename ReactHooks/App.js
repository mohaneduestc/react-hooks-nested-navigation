import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SigninScreen from './src/screens/SigninScreen'
import AccountScreen from './src/screens/AccountScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

enableScreens()
const Stack = createStackNavigator()
function TrackStack() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()
function TheTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackStack" component={TrackStack} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Trackcreate" component={TrackCreateScreen} />
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
      {true ? (
        <>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signip" component={SigninScreen} />
        </>
      ) : (
        <Stack.Screen name="TheTab" component={TheTab} />
      )}
    </Stack.Navigator>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
