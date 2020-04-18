import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ route , navigation}) => {
  // console.log(navigation)
  const { id } = route.params
  const { state, editBlogPost } = useContext(Context)

  const bloPost = state.find((bloPost) => bloPost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: bloPost.title, content: bloPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, ()=>navigation.pop())
      }}
    />
  )
}

export default EditScreen
