<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import JoinComponent from '@/components/JoinComponent.vue'
import Card1 from '@/assets/images/Posts/card1.svg'
import Card3 from '@/assets/images/Posts/card3.svg'
import Card4 from '@/assets/images/Posts/card4.svg'
import Card5 from '@/assets/images/Posts/card5.svg'
</script>

<template>
  <section
    class="w-full h-full bg-x-lavender-grey p-20 flex justify-between gap-x-10 items-start"
  >
    <div class=" basis-1/2">
      <h1 class="cap3 uppercase mb-10">Featured Post</h1>
      <h2 class="heading2 my-10">Step-by-step guide to choosing great font pairs</h2>
      <h1 class="mb-3 labels">
        By <span class="text-x-yellow">John Doe</span> |August 23, 2024
      </h1>
      <p class="my-10 body1 text-x-medium-grey">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <ButtonComponent :src="'/blogposts'" />
    </div>
    <div class="basis-1/2">
      <img
        src="@/assets/images/konten-blog.svg"
        alt=""
        class="w-[600px] mx-auto"
      />
    </div>
  </section>
  <section class="p-20">
    <h1 class="heading1 mb-10">All Posts</h1>
    <hr />
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
    <PostCard
      :gambar="Card5"
      :kategori="'Startup'"
      :title="'Logo design trends to avoid in 2022'"
    />
    <PostCard
      :gambar="Card3"
      :kategori="'TECHNOLOGY'"
      :title="'8 Figma design systems you can download for free today'"
    />
    <PostCard
      :gambar="Card4"
      :kategori="'ECONOMY'"
      :title="'Font sizes in UI design: The complete guide to follow'"
    />
    <div class="container flex justify-center items-center gap-x-10">
      <a href="" class="text-3xl text-x-medium-grey"> {{ `< ` }} Prev </a>
      <a href="" class="text-3xl font-bold"> Next > </a>
    </div>
  </section>
  <section class="p-20">
    <h2 class="heading2 mb-9">All Categories</h2>
    <CategoryComponent />
  </section>
  <JoinComponent />
</template>
