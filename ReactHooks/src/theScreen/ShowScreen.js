import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  })

  const { id } = route.params
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen
