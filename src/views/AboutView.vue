<script setup lang="ts">
import AuthorCard from '@/components/AuthorCard.vue'
import photo1 from '@/assets/images/author/photo1.svg'
import photo2 from '@/assets/images/author/photo2.svg'
import photo3 from '@/assets/images/author/photo3.svg'
import photo4 from '@/assets/images/author/photo4.svg'
import JoinComponent from '@/components/JoinComponent.vue'
</script>

<template>
  <section class="px-20">
    <div class="conten px-20 flex items-center relative -mb-10 z-10">
      <div class="head mt-10 ml-16 basis-1/2 p-20 bg-white shadow-lg">
        <h1 class="uppercase cap3">about us</h1>
        <div class="heading1">
          We are a team of content writers who share their learnings
        </div>
      </div>
      <div class="body1 text-x-dark-grey basis-1/2 p-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
    <div class="relative">
      <img src="@/assets/images/bg-about.svg" alt="" class="w-full" />
      <div class="absolute flex flex-col bottom-0 left-36 w-3/4 text-white">
        <div class="bg-x-blue p-5 w-3/4 flex justify-around">
          <div>
            <div class="display w-fit">12 +</div>
            <div class="body1">Blogs Published</div>
          </div>
          <div>
            <div class="display w-fit">18K +</div>
            <div class="body1">Views on Finsweet</div>
          </div>
          <div>
            <div class="display w-fit">30K +</div>
            <div class="body1">Total Active User</div>
          </div>
        </div>
        <div class="bg-x-yellow p-2 w-full"></div>
      </div>
    </div>
    <div class="px-32 pt-48 pb-24 bg-x-lavender-grey flex gap-x-10">
      <div class="basis-1/2">
        <div class="cap1 uppercase">our mission</div>
        <div class="heading3 my-6">
          Creating valuable content for creatives all around the world
        </div>
        <p class="body1 text-x-medium-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
      </div>
      <div class="basis-1/2">
        <div class="cap1 uppercase">Our Vision</div>
        <div class="heading3 my-6">
          A platform that empowers individuals to improve
        </div>
        <p class="body1 text-x-medium-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
      </div>
    </div>
  </section>
  <section class="p-20 flex justify-between items-center gap-x-40">
    <div class="basis-1/2">
      <h2 class="heading2">Our team of creatives</h2>
      <h4 class="heading4 my-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </h4>
      <p class="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat.
      </p>
    </div>
    <div class="basis-1/2 relative">
      <img src="@/assets/images/about2.svg" alt="" class="w-full" />
      <div
        class="bg-x-blue p-14 absolute z-100 left-[-50px] rounded-tl-[50px] top-1/4"
      ></div>
    </div>
  </section>
  <section class="p-20 flex justify-between items-center gap-x-40">
    <div class="basis-1/2 relative">
      <img src="@/assets/images/about3.svg" alt="" class="w-full" />
      <div
        class="bg-x-yellow p-10 absolute z-100 left-[40px] rounded-full bottom-[-40px]"
      ></div>
    </div>
    <div class="basis-1/2">
      <h2 class="heading2">Why we started this Blog</h2>
      <h4 class="heading4 my-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </h4>
      <p class="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat.
      </p>
    </div>
  </section>
  <section class="p-20">
    <div class="heading2 text-center p-20">List of Authors</div>
    <div class="grid grid-cols-4 justify-items-center gap-y-9">
      <AuthorCard :src="photo1" name="Floyd Miles" />
      <AuthorCard :src="photo2" name="Dianna Russel" />
      <AuthorCard :src="photo3" name="Jenny Wilson" />
      <AuthorCard :src="photo4" name="Lesly Alexander" />
      <AuthorCard :src="photo1" name="Floyd Miles" />
      <AuthorCard :src="photo2" name="Dianna Russel" />
      <AuthorCard :src="photo3" name="Jenny Wilson" />
      <AuthorCard :src="photo4" name="Lesly Alexander" />
    </div>
  </section>
  <JoinComponent/>
</template>
