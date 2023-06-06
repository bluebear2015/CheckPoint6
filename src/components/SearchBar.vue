<template>
    <!-- NOTE .prevent is the same as saying 'window.event.preventDefault()' -->
    <form @submit.prevent="searchPosts()">
        
           <div class="p-3">
            
        <input class="w-100" type="text" v-model="search" placeholder="Search..." />
    </div>
        <button class=" btn btn-outline-secondary" type="submit">
                <i class="mdi mdi-magnify"></i>
    </button>

    </form>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostService.js';
export default {
    setup() {
        const search = ref('')
        return {
            search,

            async searchPosts() {
                try {
                    const searchTerm = search.value
                    logger.log('searching Posts', searchTerm)
                    await postService.searchPosts(searchTerm)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        };
    },
};
</script>

<style></style>