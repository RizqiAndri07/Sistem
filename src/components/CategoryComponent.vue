<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import businessIcon from '@/assets/images/icon/bussiness.svg'
import ekonomiIcon from '@/assets/images/icon/ekonomi.svg'
import startUpIcon from '@/assets/images/icon/rocket-solid.svg'
import teknologiIcon from '@/assets/images/icon/teknologi.svg'
</script>

<template>
  <div class="kategori flex gap-x-8">
    <CategoryCard :src="businessIcon" title="Business" />
    <CategoryCard :src="ekonomiIcon" title="Ekonomi" />
    <CategoryCard :src="startUpIcon" title="Start Up" />
    <CategoryCard :src="teknologiIcon" title="Technology" />
  </div>
</template>
