<template>
  <div  class="w-full">
    <h1>{{ page.heading }}</h1>
    <FormStepper />
    <FormBody />
  </div>
</template>
<script lang="ts" setup>
import FormStepper from '~~/components/FormBuilder/components/FormStepper.vue'
import FormBody from '~~/components/FormBuilder/components/FormBody.vue'

const page = usePage()

</script>
