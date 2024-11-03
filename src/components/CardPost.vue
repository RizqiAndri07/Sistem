<template>
  <router-link to="/blogposts" class="container p-7 hover:bg-x-light-yellow">
    <h1 class="mb-3 labels">
      By <span class="text-x-yellow">{{ name }}</span> |{{ date }},{{ year }}
    </h1>
    <p class="heading3">{{ tittle }}</p>
  </router-link>
</template>
<script lang="ts">
export default {
  name: 'CardPost',
  props: {
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
  },
}
</script>
