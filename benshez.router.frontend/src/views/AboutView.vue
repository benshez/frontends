<template>
  <div class="row">
    <div class="col-12 col-xl-12 mb-4 mb-lg-0">
      <div class="card">
        <h5 class="card-header">About</h5>
        <div class="card-body">
          <form>
            <div class="pb-2 row border-bottom about-row" v-for="(aboutItem, key, index) in about" :key="index">
              <label :for="key" class="col-sm-2 col-form-label">{{ key }}</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :id="key" :aria-describedby="`${key}Help`"
                  :value="aboutItem">
                <div :id="`${key}Help`" class="form-text">{{ key }}.</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import api from "../apis/netgear"
import { useViewStateStore } from "../stores/viewStateStore"

const { setSpinnerShown } = useViewStateStore()
let about = ref({})
const getAttachedDevices = async () => {
  try {
    about.value = await api.getAbout();
  } catch (error) {

  } finally {
    setSpinnerShown(false)
  }
}

onMounted(async () => {
  setSpinnerShown(true)
  await getAttachedDevices()
})
</script>
<style scoped lang="scss">
.about-row:nth-child(odd) {
  background-color: #f8f9fa;
}
</style>