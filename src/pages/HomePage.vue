<template>
  <main class="container-fluid mainStyle">
    <section class="row justify-content-between pt-5">
      <div class="col-4">
        <button @click="showSearchBar = !showSearchBar" class="pFont text-end position-relative btn btn-secondary fs-5 offset-1">search</button>
        <SearchBar v-show="showSearchBar" />
        
        <!-- <SearchBar /> -->
      </div>
      <div class="col-3" >
      <router-link :to="{ name: 'Account' }">
          
          <button  class="pFont text-end position-relative btn btn-secondary fs-5 offset-1" :hidden="!user.id" >edit account</button>
      
        </router-link>
      </div>
    </section>

    


    <section class="row">
      <div class="col-10 offset-2">
    <PostForm :hidden="!user.id"/>
  </div>
    </section>

    <div class="p-4 justify-content-between d-flex ">
    <button :disabled="!previousUrl" @click="changePage(previousUrl)" class="pFont btn fs-4 m-2 btn-secondary">Older Posts</button>
    <button :disabled="!nextUrl" @click="changePage(nextUrl)" class="pFont btn fs-4 m-2 btn-secondary">New Posts</button>
   
  </div>

    <section class="row justify-content-center p-3">
      <div class="col-8 d-flex elevation-5 pCard m-3" v-for="p in posts" :key="p.id">
        <PostCard :postProp="p" />
      </div>
    </section>
  </main>

</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import {postService} from '../services/PostService.js';
import { computed } from "vue";
import { AppState } from '../AppState.js';
import { ref } from 'vue';


import PostCard from '../components/PostCard.vue'
import PostForm from '../components/PostForm.vue'
import { accountService } from '../services/AccountService.js';
import { logger } from '../utils/Logger.js';
import SearchBar from '../components/SearchBar.vue';
export default {
  components: {PostCard, PostForm , SearchBar},
  setup() {
    const isLoggedIn = ref(false);
    const showSearchBar = ref(false);
    async function checkLoginStatus() {
  isLoggedIn.value = await accountService.isLoggedIn();
}




async function getPosts() {
  try {
    await postService.getPosts();
  } catch (error) {
    Pop.error(error);
  }
}


onMounted(() => {
getPosts()
checkLoginStatus();
});
    return {
      showSearchBar,
   
      async changePage(url) {
        try {
          await postService.changePage(url)
        } catch (error) {
          Pop.error(error)
        }
    
    },

    // async deletePostId(postId) {
    //             try {
    //                 await postService.deletePost(postId)
    //             } catch (error) {
    //                 logger.error(error)
    //                 Pop.toast(error.message, 'error')
    //             }
    //         },


    posts: computed(() => AppState.posts),
      previousUrl: computed(() => AppState.previousPageUrl),
      nextUrl: computed(() => AppState.nextPageUrl),
      user: computed(() => AppState.user),

}
}}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.mainStyle{
  background-color: #b7b3ae8e;
}
</style>
