import createDataContacts from './createDataContacts'
import jsonServer from '../api/jsonServer'
const blogReducer = (state, action) => {
  // console.log(state)
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    // case 'add_blogpost':
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ]
    // case 'delete_blogpost':
    //   return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state
  }
}

const getBlogPost = dispatch=>{
  return async ()=>{
    const response = await jsonServer.get('/blogposts');
    dispatch({type:'get_blogposts', payload:response.data})
  };
}
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts',{title, content});
    // dispatch({ type: 'add_blogpost', payload: response.data })
    if (callback) {
      callback();
    }
  }
}

const editBlogPost = (dispatch) => {
  return  async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`,{title, content})
    // dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`)
    // dispatch({ type: 'delete_blogpost', payload: id })
  }
}

export const { Context, Provider } = createDataContacts(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
)
