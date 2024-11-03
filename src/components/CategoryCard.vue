<template>
  <router-link
    to="/category"
    :class="['border w-full h-fit p-5 rounded  group', `hover:bg-x-blue ${display}`]"
  >
    <img
      :src="src"
      :alt="title"
      class="w-[48px] bg-x-light-yellow rounded my-2"
    />
    <h1 class="heading3 my-2 group-hover:text-white">
      {{ title }}
    </h1>
    <p :class="[`body1 text-gray-600 group-hover:text-white ${visibility}`]">
      {{ deskripsi }}
    </p>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'CategoryCard',
  props: {
    src: {
      type: String,

      default: 'image',
    },
    title: {
      type: String,

      default: 'Title',
    },
    deskripsi: {
      type: String,

      default: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    display: {
      type: String,

      default: '',
    },
    visibility: {
      type: String,

      default: '',
    },
  },
}
</script>
