import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer SmxFwZ-KxGGgYuN0adGRR9rYmTPWGLPu3wy7ZZVQj42ZqvR3VApOGGUMlbKOWZhQ81l5AYaehuy7kWZOnsrvpmpXnJqDj0u0wRVGYunTur75jciuAFPZAGDz8UlnXnYx'
  }
})
