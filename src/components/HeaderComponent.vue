<script setup lang="ts"></script>

<template>
  <nav
    class="w-full h-[80px] bg-x-black text-white flex justify-between items-center px-20"
  >
    <img src="@/assets/images/Brand.svg" alt="" />
    <ul class="flex gap-x-6 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact us</router-link>
    </ul>
    <a
      href="#"
      class="bg-x-blue py-[12px] px-[36px] rounded-full font-bold text-[18px] hover:bg-blue-800 "
      >Contact Us</a
    >
  </nav>
</template>
