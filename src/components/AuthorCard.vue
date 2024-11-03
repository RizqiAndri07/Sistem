<template>
  <router-link to="/author"
    class="border rounded flex flex-col justify-center  items-center p-10 w-[300px] h-[350px] bg-x-light-grey hover:bg-x-light-yellow"
  >
    <img
      :src="src"
      :alt="src"
      class="w-[150px] rounded-full bg-x-light-yellow my-2"
    />
    <h1 class="name heading3 my-2">
      {{ name }}
    </h1>
    <span class="body2 text-gray-600 mb-3">{{ deskripsi }}</span>
    <SocialMedia />
  </router-link>
</template>

<script lang="ts">
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  components: {
    SocialMedia,
  },
  name: 'AuthorCard',
  props: {
    src: {
      type: String,
      required: true,
      default: 'image',
    },
    name: {
      type: String,
      required: true,
      default: 'name',
    },
    deskripsi: {
      type: String,
      required: true,
      default: 'Lorem ipsum dolor sit amet.',
    },
  },
}
</script>
