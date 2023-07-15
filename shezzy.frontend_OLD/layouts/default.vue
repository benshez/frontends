<template>
  <div class="flex justify-content-center">
    <div class="col-12">
      <TopBar />
      {{ page }}
      <Panel v-if="page" :header="page.heading" class="mt-4">
        <slot />
      </Panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
const route = useRoute()
const page = usePage()
const pageName: string = route.params.slug as string

//console.log(page)
// const weather = await axios.post(`/api/page?page`, {
      
// })

// const page: any = await useFetch(`/api/page?page=${useRoute().params.slug}`, { server: false })

// useState(`page-${useRoute().params.slug}`, () => page.data || null)
</script>
