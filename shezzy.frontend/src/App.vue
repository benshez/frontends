<template>
  <HeaderComponent />
  <div class="container-fluid mt-3">
    <div>
      <router-view />
    </div>
  </div>
  <FooterComponent class="mt-3" />
</template>
<script lang="ts" setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import "@/scss/app.scss";
</script>
