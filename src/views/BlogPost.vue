<script setup lang="ts">
import CardPost from '@/components/CardPost2.vue'
import card1 from '@/assets/images/Posts/card1.svg'
import card2 from '@/assets/images/Posts/card2.svg'
import card3 from '@/assets/images/Posts/card3.svg'
import JoinComponent from '@/components/JoinComponent.vue'
</script>

<template>
  <section class="mx-auto w-1/2 my-20">
    <div class="profil flex items-center gap-x-3">
      <div class="box">
        <img
          src="@/assets/images/author/Image.svg"
          alt=""
          class="rounded-full w-20 object-cover"
        />
      </div>
      <div class="box">
        <div class="text-x-yellow heading3">Andrew Jonson</div>
        <div class="body1 text-x-medium-grey">Posted on 27 January 2022</div>
      </div>
    </div>
    <div class="heading1 my-6">
      Step-by-step guide to choosing great font pairs
    </div>
    <h1 class="flex gap-x-2 items-center heading4 my-7">
      <img src="@/assets/images/icon/rocket-solid.svg" alt="" /> STARTUP
    </h1>
  </section>
  <img src="@/assets/images/Posts/blogpost.svg" alt="" class="px-20 w-full" />
  <section class="mx-auto w-1/2 my-20">
    <div class="heading2 my-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </div>
    <p class="body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
      nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
      adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
      montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
      quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
    </p>
    <div class="heading2 my-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </div>
    <p class="body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
      nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
      adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
      montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
      quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
    </p>
    <p class="body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
      nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
      adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
      montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
      quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
    </p>
    <ul class="list-disc px-5 my-8">
      <li class="heading4">Lorem ipsum dolor sit amet</li>
      <li class="heading4">Non blandit massa enim nec scelerisque</li>
      <li class="heading4">Neque egestas congue quisque egestas</li>
    </ul>
    <p class="body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
      nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
      adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
      montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
      quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
    </p>
    <div class="heading2 mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </div>
    <p class="body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
      nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
      adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
      montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
      quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
    </p>
  </section>
  <section class="my-20 px-20">
    <div class="heading2">What Next to Read</div>
    <div class="flex gap-x-5 justify-between">
      <CardPost :src="card1" />
      <CardPost :src="card2" />
      <CardPost :src="card3" />
    </div>
    <hr class="my-32" />
  </section>
  <section>
    <JoinComponent />
  </section>
</template>
