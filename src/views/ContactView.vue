<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
  <section class="p-28 mx-auto w-2/3">
    <div class="flex flex-col gap-y-7">
      <h1 class="cap3 text-center uppercase">contact us</h1>
      <h1 class="heading1 text-center">Let’s Start a Conversation</h1>
      <p class="text-center body1 text-x-medium-grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </div>
    <div class="bg-x-yellow p-20 my-10">
      <div class="grid grid-cols-2 gap-x-10">
        <div class="">
          <p class="body2 text-x-dark-grey opacity-60">Working Hours</p>
          <hr class="bg-x-dark-grey my-5 opacity-[70%]" />
          <h5 class="heading5">Monday To Friday</h5>
          <h5 class="heading5">9:00 AM to 8:00 PM</h5>
          <p class="body1 text-x-dark-grey opacity-60">
            Our Support Team is available 24/7
          </p>
        </div>
        <div class="">
          <p class="body2 text-x-dark-grey opacity-60">Working Hours</p>
          <hr class="bg-x-dark-grey my-5 opacity-[70%]" />
          <h5 class="heading5">020 7993 2905</h5>
          <p class="body1 text-x-dark-grey opacity-60">hello@finsweet.com</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-y-5 gap-x-5 body1">
      <input
        type="text"
        class="col-span-2 border placeholder:text-black border-black p-7"
        placeholder="First Name"
      />
      <input
        type="email"
        class="col-span-2 border border-black p-7 placeholder:text-black"
        placeholder="Email"
      />
      <select name="province" id="province" class="p-7 border border-black">
        <option value="" selected disabled>Province</option>
        <option value="Jawa Tengah">Jawa Tengah</option>
        <option value="Jawa Barat">Jawa Barat</option>
        <option value="Jawa Timur">Jawa Timur</option>
      </select>
      <select
        name="city"
        id="city"
        class="p-7 border border-black"
        placeholder="City"
      >
        <option value="" selected disabled>City</option>
        <option value="Solo">Solo</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Bandung">Bandung</option>
      </select>
      <textarea
        name="message"
        id="message"
        class="col-span-2 border border-black p-7 placeholder:text-black"
        placeholder="Message"
      ></textarea>
      <ButtonComponent :button-text="'Send Message'" class="col-span-2 text-center" />
    </div>
  </section>
</template>
