  <script setup lang="ts">
  import PostCard from '@/components/PostCard.vue'
  import card from '@/assets/images/Posts/categoriview.svg'
  import CategoryCard from '@/components/CategoryCard.vue'
  import businessIcon from '@/assets/images/icon/bussiness.svg'
  import ekonomiIcon from '@/assets/images/icon/ekonomi.svg'
  import startUpIcon from '@/assets/images/icon/rocket-solid.svg'
  import teknologiIcon from '@/assets/images/icon/teknologi.svg'
  </script>
  <template>
    <section class="bg-x-lavender-grey flex flex-col gap-y-7 p-20">
      <h1 class="display text-center">Bussiness</h1>
      <p class="body1 text-center text-x-medium-grey mx-auto w-1/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <p class="text-center cap3">Blog > Business</p>
    </section>
    <section class="flex p-20 border gap-x-7">
      <div class="basis-3/4">
        <PostCard
          :size="'300'"
          :gambar="card"
          :kategori="'bussiness'"
          :title="'Top 6 free website mockup tools 2022'"
        />
        <PostCard
          :size="'300'"
          :gambar="card"
          :kategori="'BUSINESS'"
          :title="'Step-by-step guide to choosing great font pairs'"
        />
        <PostCard
          :size="'300'"
          :gambar="card"
          :kategori="'bussiness'"
          :title="'Ten free foogle fonts that you should use'"
        />
        <PostCard
          :size="'300'"
          :gambar="card"
          :kategori="'bussiness'"
          :title="'8 Figma design systems you can download for free today'"
        />
        <PostCard
          :size="'300'"
          :gambar="card"
          :kategori="'bussiness'"
          :title="'What did I learn from doing 50+ design sprints?'"
        />
      </div>
      <div class="basis-1/4 py-10">
        <h2 class="heading2 mb-3">Categories</h2>
        <div class="flex flex-col gap-y-5">
          <CategoryCard
            :src="businessIcon"
            title="Business"
            :visibility="'hidden'"
            :display="'flex items-center gap-x-5'"
          />
          <CategoryCard
            :src="ekonomiIcon"
            title="Ekonomi"
            :visibility="'hidden'"
            :display="'flex items-center gap-x-5'"
          />
          <CategoryCard
            :src="startUpIcon"
            title="Start Up"
            :visibility="'hidden'"
            :display="'flex items-center gap-x-5'"
          />
          <CategoryCard
            :src="teknologiIcon"
            title="Technology"
            :visibility="'hidden'"
            :display="'flex items-center gap-x-5'"
          />
          <h2 class="heading2 mb-3">All Tags</h2>
          <div class="flex flex-wrap gap-5">
            <button class="buttons">Bussiness</button>
            <button class="buttons">Experience</button>
            <button class="buttons">Screen</button>
            <button class="buttons">Technology</button>
            <button class="buttons">Marketing</button>
            <button class="buttons">Life</button>
          </div>
        </div>
      </div>
    </section>
  </template>
