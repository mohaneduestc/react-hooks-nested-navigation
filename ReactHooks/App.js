import React, { useEffect } from 'react'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import { ScreenOrientation } from 'expo'
import IndexScreen from './src/theScreen/IndexScreen'
import { Provider } from './src/context/BlogContext'
import ShowScreen from './src/theScreen/ShowScreen'
import CreateScreen from './src/theScreen/CreateScreen'
import EditScreen from './src/theScreen/EditScreen'

import { Feather } from '@expo/vector-icons'

enableScreens()

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        gestureEnabled: true
      }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          headerTitle: "Indexs",
        }}
      />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Bussiness Search',
          headerTitleStyle: { alignSelf: 'center' }
        }}
      />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  )
}

function App1() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
export default () => {
  return (
    <Provider>
      <App1 />
    </Provider>
  )
}
