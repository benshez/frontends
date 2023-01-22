<template>
  <div class="row">
    <div class="col-12 col-xl-12 mb-4 mb-lg-0">
      <div class="card">
        <h5 class="card-header">Attached Devices ({{ devices?.devices?.count }})</h5>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Allowed</th>
                  <th>Ip</th>
                  <th>Mac</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(device, index) in devices?.devices?.list" :key="index">
                  <td>
                    {{ device.Name }}
                  </td>
                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" :id="`flexSwitchCheckDefault${index}`" checked
                        v-if="device?.AllowOrBlock === 'Allow'" @click="onDisAllowClick(device)" />
                      <input class="form-check-input" type="checkbox" :id="`flexSwitchCheckDefault${index}`" v-else
                        @click="onAllowClick(device)" />
                      <label class="form-check-label" :for="`flexSwitchCheckDefault${index}`"></label>
                    </div>
                  </td>
                  <td>
                    {{ device.IP }}
                  </td>
                  <td>
                    {{ device.MAC }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" class="btn btn-block btn-light">View all</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import api from "../apis/netgear"
import { useViewStateStore } from '../stores/viewStateStore'

const { setSpinnerShown } = useViewStateStore()

let devices = ref({})
const getAttachedDevices = async () => {
  devices.value = await api.getAttachedDevices();
  setSpinnerShown(false)
}
const onAllowClick = async (device) => {
  setSpinnerShown(true)
  await api.allowOrBlockDevice({
    action: "Allow",
    mac: device.MAC
  })
  await getAttachedDevices()
}
const onDisAllowClick = async (device) => {
  setSpinnerShown(true)
  await api.allowOrBlockDevice({
    action: "Block",
    mac: device.MAC
  })
  await getAttachedDevices()
}
onMounted(async () => {
  setSpinnerShown(true)
  await getAttachedDevices()
})
</script>