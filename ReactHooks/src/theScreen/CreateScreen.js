import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  )
}
const styles = StyleSheet.create({})

export default CreateScreen
