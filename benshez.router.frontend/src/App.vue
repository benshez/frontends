<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <SideNavigation />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-4">
          <router-view />
          <Footer />
        </main>
      </div>
    </div>
    <Loader />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import SideNavigation from './components/SideNavigation.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Spinner.vue'
import { storeToRefs } from 'pinia'
import { useViewStateStore } from './stores/viewStateStore'

const { sidebarShown } = storeToRefs(useViewStateStore())
const { setSidebarShown } = useViewStateStore()

const onNavbarTogglerClick = () => {
  if (sidebarShown) setSidebarShown(false)
}

onMounted(() => {
  window.addEventListener("resize", onNavbarTogglerClick);
})
onUnmounted(() => {
  window.removeEventListener("resize", onNavbarTogglerClick);
})
</script>
