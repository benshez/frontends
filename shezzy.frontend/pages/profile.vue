<template>
  <div class="grid">
    <div class="col-12">
      <Card class="custom">
        <template #title> Profile </template>
        <template #content>
          {{ user }}
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
const user = useUser();
</script>
