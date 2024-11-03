<template>
  <router-link
    to="/blogposts"
    :class="['container flex items-center my-10 hover:bg-x-light-yellow', flex]"
  >
    <div class="box">
      <img :src="gambar" :alt="gambar" :class="[`w-[${size}px]`]" />
    </div>
    <div class="box ml-10 flex flex-col gap-y-8 w-1/2">
      <h2 class="uppercase text-x-yellow cap1">
        {{ kategori }}
      </h2>
      <h1 class="heading2">{{ title }}</h1>
      <p class="body1 text-x-medium-grey">{{ deskripsi }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'PostCard',
  props: {
    gambar: {
      type: String,
      required: true,
      default: 'img',
    },
    kategori: {
      type: String,
      required: true,
      default: 'img',
    },
    title: {
      type: String,
      required: true,
      default: 'img',
    },
    deskripsi: {
      type: String,
      required: true,
      default:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    flex: {
      type: String,
      required: true,
      default: 'flex-row',
    },
    size: {
      type: String,
      required: true,
      default: '600',
    },
  },
}
</script>
