<template>
  <div class="d-flex align-items-center loader text-center" :class="spinnerShown ? 'visible' : 'invisible'">
    <div class="w-100">
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      <div class="w-100"><b>Loading...</b></div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useViewStateStore } from '../stores/viewStateStore'

const { spinnerShown } = storeToRefs(useViewStateStore())

</script>
<style lang="scss" scoped>
.loader {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  opacity: 0.9;
  z-index: 1000;
  color: #fff;

  .justify-content-center {
    width: 100%;
  }
}
</style>