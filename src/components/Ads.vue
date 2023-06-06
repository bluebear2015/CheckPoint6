<template>
    <div class="adImage">
      <div v-for="ad in ads" :key="ad.title">
        <a :href="ad.linkURL">
          <img v-if="ad.banner" :src="ad.banner" alt="Banner Ad" />
          <!-- <img v-else-if="ad.square" :src="ad.square" alt="Square Ad" />
          <img v-else-if="ad.tall" :src="ad.tall" alt="Tall Ad" /> -->
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      ads: Array
    }
  };
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    height: 50px; 
    overflow: hidden; /* Ensure the ads do not overflow */
  }
  
  .adImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  