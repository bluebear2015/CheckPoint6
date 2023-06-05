import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Profile.js"


class PostService{
    async getPostByProfile(id) {
        const res = await api.get('api/posts/',
          {
            params: {
             creatorId: id
            }
    
          })
        AppState.posts = res.data.posts.map(p => new Post(p))
      }
async getPosts(){
const res = await api.get('api/posts')
// console.log(res.data)
AppState.posts = res.data.posts.map(p => new Post(p))

AppState.previousPageUrl = res.data.older;
AppState.nextPageUrl = res.data.newer;
}

async changePage(url) {
    const res = await api.get(url);
    // logger.log(res.data);
    AppState.posts = res.data.posts;
    AppState.previousPageUrl = res.data.older;
    AppState.nextPageUrl = res.data.newer;
  }

  async submitPostForm(formData) {
    const res = await api.post('api/posts/', formData)
    logger.log('[CREATING POST]', res.data)
    AppState.posts.unshift(new Post(res.data))
}

async deletePost(postId) {
  const res = await api.delete(`api/posts/${postId}`)
  logger.log('[DELETING post]', res.data)
  AppState.posts = AppState.posts.filter(p => p.id != postId)
}

async searchPosts(searchTerm) {

  const res = await api.get('api/posts/', {
      params: {
          query: searchTerm,
          
      }
  })
  logger.log('[SEARCHING Posts]', res.data)

  AppState.query = searchTerm 
    AppState.posts = res.data.posts.map(p => new Post(p))
   

}

}




export const postService = new PostService()