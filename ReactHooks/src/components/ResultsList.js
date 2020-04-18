import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import ResultsDetails from './ResultsDetails'
import { useNavigation } from '@react-navigation/native';


const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // onPress={() => console.log(navigation.navigate)}
              onPress={() => navigation.navigate('ResultsShow', {id:item.id})}
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  }
})

export default (ResultsList)
// export default withNavigation(ResultsList)
//
