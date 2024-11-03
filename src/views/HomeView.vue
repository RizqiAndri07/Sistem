<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CardPost from '@/components/CardPost.vue'
import AuthorCard from '@/components/AuthorCard.vue'
import photo1 from '@/assets/images/author/photo1.svg'
import photo2 from '@/assets/images/author/photo2.svg'
import photo3 from '@/assets/images/author/photo3.svg'
import photo4 from '@/assets/images/author/photo4.svg'
import JoinComponent from '@/components/JoinComponent.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import CarrouselComponent from '@/components/CarrouselComponent.vue'
</script>

<template>
  <main>
    <section
      class="relative bg-[url('@/assets/images/bg-home.svg')] bg-cover bg-center w-full h-screen text-white"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-black to-black via-transparent opacity-80"
      ></div>
      <div
        class="mx-20 w-1/2 relative flex flex-col justify-center items-start h-screen z-10"
      >
        <h1 class="cap1">POSTED ON <span class="font-black">STARTUP</span></h1>
        <h1 class="display">Step-by-step guide to choosing great font pairs</h1>
        <h1 class="body1 my-5">
          By <span class="text-x-blue">James West</span> | May 23, 2022
        </h1>
        <p class="body1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <ButtonComponent :src="'/blog'" />
      </div>
    </section>
    <section class="h-full w-full p-20">
      <div class="content grid grid-cols-3 gap-x-5">
        <div class="col-span-2 box">
          <h1 class="heading2 mb-10">Featured Post</h1>
          <div class="card border p-10">
            <img src="@/assets/images/post-feature.svg" class="w-full" alt="" />
            <h1 class="labels my-5">
              By <span class="text-x-yellow">John Doe</span> | May 23, 2022
            </h1>
            <h3 class="heading3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p class="text-x-medium-grey body1 my-5 mb-10 w-2/3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            <ButtonComponent class="w-fit" :src="'/blog'" />
          </div>
        </div>
        <div class="col-span-1 box">
          <div class="flex justify-between items-center mb-5">
            <h1 class="heading2">All Post</h1>
            <h1 class="body1 text-x-yellow">View All</h1>
          </div>
          <div class="post-menu flex flex-col grow">
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
          </div>
        </div>
      </div>
    </section>
    <section class="my-8 px-20">
      <div class="gaya flex flex-row justify-end">
        <div class="bg-x-yellow basis-3/5 p-2"></div>
        <div class="bg-x-blue basis-1/5 p-2"></div>
      </div>
      <div class="grid grid-cols-2 gap-x-20 p-32 bg-x-lavender-grey">
        <div class="box">
          <h1 class="cap1">ABOUT US</h1>
          <h1 class="heading2 my-5">
            We are a community of content writers who share their learnings
          </h1>
          <p class="text-x-medium-grey body1 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <router-link to="/blog" class="text-x-yellow text-[18px]"
            >Read More >
          </router-link>
        </div>
        <div class="box">
          <h1 class="cap1">OUR MISSION</h1>
          <h1 class="heading3 my-5">
            Creating valuable content for creatives all around the world
          </h1>
          <p class="text-x-medium-grey body1 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
    <section class="px-20 my-32">
      <h1 class="text-center heading2 my-10">Choose A Category</h1>
      <CategoryComponent />
    </section>
    <section class="my-32 text-black">
      <div class="container mx-20 my-10 relative">
        <img src="@/assets/images/bg-whywe.svg" alt="" class="z-10" />
        <div
          class="absolute bottom-0 right-0 transform w-1/2 z-20 p-20 bg-white bg-opacity-75"
        >
          <!-- Konten di dalam div -->
          <h1 class="cap1">WHY WE STARTED</h1>
          <p class="mt-4 heading1">
            It started out as a simple idea and evolved into our passion
          </p>
          <p class="body1 text-x-medium-grey mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <ButtonComponent :buttonText="'Discover Our Story >'" />
        </div>
      </div>
    </section>
    <section class="px-20">
      <h1 class="heading2 text-center my-10">List Of Author</h1>
      <div class="flex justify-between">
        <AuthorCard :src="photo1" name="Floyd Miles" />
        <AuthorCard :src="photo2" name="Dianna Russel" />
        <AuthorCard :src="photo3" name="Jenny Wilson" />
        <AuthorCard :src="photo4" name="Lesly Alexander" />
      </div>
      <div class="flex justify-between items-center my-10">
        <img src="@/assets/images/company/Featuredin.svg" alt="" />
        <img src="@/assets/images/company/Logo 1.svg" alt="" />
        <img src="@/assets/images/company/Logo 2.svg" alt="" />
        <img src="@/assets/images/company/Logo 3.svg" alt="" />
        <img src="@/assets/images/company/Logo 4.svg" alt="" />
        <img src="@/assets/images/company/Logo 5.svg" alt="" />
      </div>
    </section>
    <section class="px-20 my-32">
      <div
        class="container bg-x-light-yellow h-[446px] p-16 grid grid-cols-3 border"
      >
        <div class="box">
          <h1 class="cap1">TESTIMONIAL</h1>
          <h1 class="heading2 my-5">What poeple say about our blog</h1>
          <p class="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div class="col-span-2 border-l-2 ml-10">
          <CarrouselComponent />
        </div>
      </div>
    </section>
    <JoinComponent />
  </main>
</template>
