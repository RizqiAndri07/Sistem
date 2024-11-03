<script setup lang="ts">
import HeaderContent from '@/components/HeaderComponent.vue'
import FooterContent from '@/components/FooterComponent.vue'
import {  RouterView } from 'vue-router'
</script>

<template>
  <HeaderContent />
  <RouterView/>
  <FooterContent />
</template>
