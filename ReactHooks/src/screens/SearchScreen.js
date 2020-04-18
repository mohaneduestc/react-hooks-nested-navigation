import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  // console.log(results)

  const filterResultsByPrice = price => {
    // price=$ or $$ or $$$
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={text => setTerm(text)}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          
        />
        <ResultsList
          title="Cost Spender"
          results={filterResultsByPrice('$$$')}
          
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen
