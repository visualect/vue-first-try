import axios from 'axios'

class PostsService {
  async getPerPage(page){
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      return response.data
    } catch(e) {
      throw new Error(e)
    }
  }
}

export default new PostsService()