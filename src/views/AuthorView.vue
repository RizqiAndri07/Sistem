<script setup lang="ts">
import SocialMedia from '@/components/SocialMedia.vue'
import Card4 from '@/assets/images/Posts/card4.svg'
import Card1 from '@/assets/images/Posts/card1.svg'
import PostCard from '@/components/PostCard.vue';
</script>

<template>
  <section class="bg-x-lavender-grey p-20 relative">
    <div class="mx-36 mb-16">
      <div class="flex gap-x-5">
        <img src="@/assets/images/author/auth.svg" alt="" />
        <div class="flex flex-col gap-y-6">
          <h1 class="heading1">
            Hey there, I’m Andrew Jonhson and welcome to my Blog
          </h1>
          <p class="body1 text-x-medium-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
          <SocialMedia />
        </div>
      </div>
      <div
        class="p-2 bg-x-yellow mx-36 bottom-0 left-20 absolute w-[69%]"
      ></div>
    </div>
  </section>
  <section class="px-56 py-36">
    <h1 class="heading1">My Posts</h1>
    <div class="flex flex-col">
      <PostCard
        :gambar="Card1"
        :kategori="'startup'"
        :title="'Design tips for designers that cover everything you need'"
      />
      <PostCard
        :gambar="Card4"
        :kategori="'BUSINESS'"
        :title="'How to build rapport with your web design clients'"
      />
    </div>
  </section>
</template>
