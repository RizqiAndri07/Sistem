<template>
    <router-link
      :to="src"
      class="bg-x-blue px-14 py-6 font-bold text-[18px] text-white my-3 hover:bg-blue-800"
      :class="`rounded-${rounded}`"
    >
      {{ buttonText }}
    </router-link>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
  props: {
    buttonText: {
      type: String,
      required: true,
      default: 'Read More >',
    },
    src: {
      type: String,
      required: true,
      default: '#',
    },
    rounded: {
      type: String,
      required: true,
      default: 'none',
    },
  },
}
</script>
