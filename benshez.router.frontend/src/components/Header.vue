<template>
  <nav class="navbar navbar-light bg-light p-3">
    <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
      <a class="navbar-brand" href="#">
        Router Dashboard
      </a>
      <button class="navbar-toggler d-md-none collapsed mb-3" type="button" data-toggle="collapse"
        data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation" @click="onNavbarTogglerClick">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="col-12 col-md-4 col-lg-2">
      <input class="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search">
    </div>
    <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
      <div class="mr-3 mt-1">
        <span></span>
      </div>
    </div>
  </nav>
</template>
<script setup>
  import { storeToRefs } from 'pinia'
  import { useViewStateStore } from '../stores/viewStateStore'

  const { sidebarShown } = storeToRefs(useViewStateStore())
  const { setSidebarShown } = useViewStateStore()

  const onNavbarTogglerClick = () => {
    setSidebarShown(!sidebarShown.value)
  }
</script>
<style scoped lang="scss">
.navbar {
  top: 0;
  position: sticky;
  z-index: 999;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%);
}
</style>