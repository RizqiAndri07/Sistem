<template>
  <router-link
    to="/blogposts"
    class="w-[450px] font-inter leading-5 tracking-widest border rounded-xl hover:bg-x-light-yellow p-7"
  >
    <div class="w-full h-[300px] mx-auto">
      <img :src="src" :alt="src" class="w-full h-full object-cover" />
    </div>
    <h1 class="my-3 labels">
      By <span class="text-x-yellow">{{ name }}</span> |{{ date }},{{ year }}
    </h1>
    <p class="heading3">{{ tittle }}</p>
    <p class="body1 text-x-medium-grey">
      {{ deskripsi }}
    </p>
  </router-link>
</template>
<script lang="ts">
export default {
  name: 'CardPost',
  props: {
    src: {
      type: String,
      required: true,
      default: 'img',
    },
    name: {
      type: String,
      required: true,
      default: 'John Doe',
    },
    date: {
      type: String,
      required: true,
      default: 'Januari 1',
    },
    year: {
      type: String,
      required: true,
      default: '2024',
    },
    tittle: {
      type: String,
      required: true,
      default: '8 Figma design systems that you can download for free today.',
    },
    deskripsi: {
      type: String,
      required: true,
      default:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
  },
}
</script>
