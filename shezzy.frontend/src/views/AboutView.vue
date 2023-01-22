<template>
  <h1 class="mb-4">{{ data.caption }}</h1>
  <div class="card shadow">
    <img src="../../public/img/shez.png" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        {{ data.heading }}
      </h5>
      <p
        v-for="(paragraph, index) in data.paragraphs"
        :key="index"
        v-html="paragraph"
        class="card-text"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const data = reactive({
  caption: `About Us`,
  heading: `Inspiring, Extraordinary, and Truly Unforgettable Weddings`,
  paragraphs: [
    `Dream Weddings Sunshine Coast is a full-service wedding and event styling company based on the beautiful Sunshine Coast in Queensland, Australia. Founded in 2012 by Sheryl van Heerden, a passionate and dedicated business woman, driven and innovative with her creations.`,
    `<q>I pride myself on my commitment and high level of service to each one of my clients. I listen to my clients and help them to bring their dream wedding to life. With the experience I have in the industry you will be guided and supported throughout your wedding planning journey. I believe in quality and delivering a perfect experience which sets me apart from my competitors. I love what I do, and I don't class this as a job, its all love. My team and I are here to make sure that each and every wedding or event we are involved in is inspiring, extraordinary, and unforgettable.</q>`,
    `Trust us to create the perfect setting for your dream wedding day or event.`,
  ],
});
</script>
