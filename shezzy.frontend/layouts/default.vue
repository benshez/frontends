<template>
  <div class="flex justify-content-center">
    <div class="col-12">
      <TopBar />
      <Panel v-if="page" :header="page.heading" class="mt-4">
        <slot />
      </Panel>
    </div>
  </div>
</template>

<script setup lang="ts">
const page = usePage()

</script>
