<template class="container-fluid">

<div class="d-flex flex-row justify-content-evenly ">
    
  <div class="text-center">
      <h1>{{ postProp?.title }}</h1>
    </div>
    <div class=" p-3">
      <div class=" p-3">
        <img class="img-fluid" :src="postProp?.imgUrl" alt="">
        <h5 class="my-3 border d-flex"> Likes {{ postProp?.likeIds.length }} </h5>
        <span> <button > 👍🏾👍🏾👍🏾 </button> </span>
      </div>
      <div class=" d-flex flex-column justify-content-flex-end">
        <p>{{ postProp?.body }}</p>
       
        <div class="d-flex justify-content-center p-3">
            
          <router-link :to="{ name: 'Profile', params: { id: postProp?.creatorId } }">
            <div class="text-end">
          <h5>{{ postProp?.creator.name }}</h5>
          <p>{{ postProp?.createdAt }}</p>
        </div>
            <img class="creator-picture rounded-circle" :src="postProp?.creator.picture">
          </router-link>
         

        </div>
        <button @click="deletePost(postProp?.id)" v-if="postProp?.creator.id == account?.id" class="btn btn-danger"
                    title="Delete post"><i class="mdi mdi-delete"></i> </button>

      </div>
    </div>
  </div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { Post } from '../models/Post.js'
import { postService } from '../services/PostService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'

export default {
props:{
    postProp: {type: Post, required: true}
}, setup(){
return{

  async deletePost(postId) {
                try {
                    await postService.deletePost(postId)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },

            account: computed(() => AppState.account)


}
}
}
</script>

<style>
.creator-picture {
  height: 100px;
  width: 100px;
  object-fit: cover
}
.pCard{
  background-color: rgba(212, 193, 193, 0.492);
  font-family: 'Courier New', Courier, monospace;
}

.pFont{
  font-family: 'Courier New', Courier, monospace;}

</style>