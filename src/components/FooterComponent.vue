<script lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  components: {
    ButtonComponent,
    SocialMedia,
  },
}
</script>

<template>
  <footer class="bg-x-black w-full mt-3 text-white px-20 py-10">
    <div class="flex justify-between items-start mb-20">
      <img src="@/assets/images/Finsweet.svg" alt="" />
      <ul class="flex gap-x-8">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/privacypolicy">Privacy & Policy</router-link>
      </ul>
    </div>
    <div
      class="box bg-x-dark-grey px-24 py-32 items-center flex flex-row gap-x-10"
    >
      <h1 class="heading2 basis-1/2">
        Subscribe to our news letter to get latest updates and news
      </h1>
      <div class="search-box flex items-center basis-1/2 gap-x-5">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          id="email"
          class="bg-transparent border-gray-500 px-5 py-6 grow border-2"
        />
        <ButtonComponent :buttonText="'Subscribe'" />
      </div>
    </div>
    <div class="flex justify-between items-center mt-4">
      <div class="address body1 text-zinc-400">
        <h1>Finstreet 118 2561 Fintown</h1>
        <h1>Hello@finsweet.com 020 7993 2905</h1>
      </div>
      <SocialMedia />
    </div>
  </footer>
</template>
