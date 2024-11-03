<template>
  <div class="flex items-center justify-center h-full">
    <div class="w-full h-full mx-auto">
      <div class="carousel w-full h-full">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          :id="slide.id"
          class="carousel-item relative w-full"
        >
          <div class="w-full  h-full rounded-lg p-10">
            <div class="flex flex-col h-full justify-between">
              <h1 class="text-2xl font-semibold mb-8">
                {{ slide.content }}
              </h1>

              <div class="flex justify-between items-center">
                <div class="flex gap-x-3">
                  <div class="avatar">
                    <div class="w-16 rounded-full">
                      <img
                        :src="getImageUrl(slide.image)"
                        :alt="slide.author"
                      />
                    </div>
                  </div>
                  <div>
                    <h5 class="text-lg font-semibold">{{ slide.author }}</h5>
                    <p class="text-base-content/60">{{ slide.location }}</p>
                  </div>
                </div>

                <div class="flex gap-x-4">
                  <a
                    :href="'#' + getPrevSlideId(index)"
                    class="btn btn-circle btn-outline bg-white"
                    @click.prevent="scrollToSlide(getPrevSlideId(index))"
                    >❮</a
                  >
                  <a
                    :href="'#' + getNextSlideId(index)"
                    class="btn btn-circle btn-outline bg-white"
                    @click.prevent="scrollToSlide(getNextSlideId(index))"
                    >❯</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Import gambar

const slides = ref([
  {
    id: 'slide1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    author: 'Sri Mulat',
    location: 'Grogol, Sukoharjo City',
    image: 'photo1.svg',
  },
  {
    id: 'slide2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    author: 'Sri Mulat',
    location: 'Grogol, Sukoharjo City',
    image: 'photo1.svg',
  },
  {
    id: 'slide3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    author: 'Sri Mulat',
    location: 'Grogol, Sukoharjo City',
    image: 'photo1.svg',
  },
  {
    id: 'slide4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae',
    author: 'Sri Mulat',
    location: 'Grogol, Sukoharjo City',
    image: 'photo1.svg',
  },
])

// Function untuk mendapatkan URL gambar
const getImageUrl = (name: string) => {
  // Cara 1: Menggunakan new URL (Vite)
  try {
    return new URL(`/src/assets/images/author/${name}`, import.meta.url).href
  } catch (error) {
    console.error('Error loading image:', error)
    return '' // atau URL gambar default
  }
}

const getNextSlideId = (currentIndex: number): string => {
  return slides.value[(currentIndex + 1) % slides.value.length].id
}

const getPrevSlideId = (currentIndex: number): string => {
  return slides.value[
    (currentIndex - 1 + slides.value.length) % slides.value.length
  ].id
}

const scrollToSlide = (slideId: string) => {
  const targetElement = document.getElementById(slideId)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }
}
</script>

<style scoped>
.carousel-item {
  scroll-snap-align: center;
}

.carousel {
  scroll-behavior: smooth;
}
</style>
