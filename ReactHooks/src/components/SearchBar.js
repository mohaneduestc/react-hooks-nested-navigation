import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={onTermSubmitted}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom:10,

    marginTop: 15
    // alignItems:'center'
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
})

export default SearchBar
