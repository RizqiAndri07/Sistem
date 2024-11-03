<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div
    class="mx-auto my-20 flex flex-col w-1/3 gap-y-8 items-center justify-center"
  >
    <h2 class="heading2 text-center">
      Join our team to be a part of our story
    </h2>
    <p class="text-center body1 text-x-medium-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>
    <ButtonComponent :button-text="'Join Now'" />
  </div>
</template>
