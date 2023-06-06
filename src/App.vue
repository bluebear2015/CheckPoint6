<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="container-fluid bg-secondary">
      <!-- <div type="banner" class="banner container-fluid image-fluid"> -->
       
          <div class="d-flex flex-row justify-content-center image-fluid">
            
              <Ads :ads="ads" />
          
           
          </div>
<!--         
      </div> -->
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import Navbar from './components/Navbar.vue';
import { adService } from './services/AdService.js';
import Pop from './utils/Pop.js';
import Ads from './components/Ads.vue'; // Import the Ads component

async function getAds() {
  try {
    await adService.getAds();
  } catch (error) {
    Pop.error(error);
  }
}

export default {
  setup() {
    onMounted(() => {
      getAds();
    });

    return {
      ads: computed(() => AppState.ads),
      appState: computed(() => AppState)
    };
  },
  components: { Navbar, Ads } // Register the Ads component
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

// imgAds {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>

