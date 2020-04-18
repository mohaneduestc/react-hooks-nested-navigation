import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route, navigation }) => {
  const [result, useResult] = useState(null)
  const { id } = route.params

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    useResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})

export default ResultsShowScreen
