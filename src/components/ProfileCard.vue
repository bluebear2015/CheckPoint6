<template>
    <div class="card ">
      <div class="card-body">
        <div class="profile-card mb-2 text-center">
          <p class="text-center mb-0">
            <img  :src="profile.picture" alt="profile.name" class="rounded-circle profile-picture img-fluid">
  <img :src="profile.coverImg" alt="profile.name" class="cImage img-fluid">
          </p>
        </div>
        <h1>{{ profile.name }}</h1>
        <p>
       <span class="fs-5 text-bold">Bio:</span> <h4>  {{ profile.bio }} </h4>
           </p>
           <li>
       <span class="fs-5 text-bold">Linkedin:</span>  <u> {{ profile.linkedin }}</u>
        </li> <li>
      <span class="fs-5 text-bold">Email:</span>  <u>  {{ profile.email }}</u>
        </li>   <li>
  <span class="fs-5 text-bold">Class:</span>   <u>  {{ profile.class }}</u>
       </li> <li>
    <span class="fs-5 text-bold">Graduated:</span>   <u>   {{ profile.graduated }}</u>
         </li> 
         <!-- <li>
       
    <span class="fs-5 text-bold">Alumni:</span>    <u>  {{ profile.alumni }} </u>
       </li> -->
      </div>
    </div>
    
  </template>
  
  
  <script lang="ts">
  import { Account } from '../models/Account.js';
  import { Profile } from '../models/Profile.js';
  
  export default {
  
    props: {
      profile: { type: [Profile, Account], required: true }
    },
  
  
    setup() {
  
      return {}
    }
  }
  </script>
  
  
  <style lang="scss" scoped>
.creator-picture {
  height: 100px;
  width: 100px;
  object-fit: cover
}
.cImage {
  height: 50px;
  width: 50px;
  object-fit: cover
}
</style>