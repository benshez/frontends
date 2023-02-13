<template>
  <Menubar :model="menuItems" v-if="menuItems">
    <template #start>
      A logo goes here...
    </template>

    <template #end>
      <div v-if="user" class="flex align-items-center">
        <Avatar :image="user.picture" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { IPage } from "~~/models/interfaces/IPage"
import data from '~~/models/data/data.json'
const user = useUser()
const pages = data.pages

const menuItems: any = []

menuItems.push(
  {
    label: `Login`,
    icon: 'pi pi-fw pi-home',
    url: '/api/auth/login',
    visible: user.value === null
  }
)

pages.forEach((page: any) => {
  if (user.value) {
    menuItems.push(
      {
        name: page.name,
        label: page.heading,
        icon: 'pi pi-fw pi-home',
        to: page.path,
        visible: true
      }
    )
  } else {
    if (!page.requiresAuthenticaton) {
      menuItems.push(
        {
          name: page.name,
          label: page.heading,
          icon: 'pi pi-fw pi-home',
          to: page.path,
          visible: true
        }
      )
    }
  }
})

menuItems.push(
  {
    label: `Welcome, ${user?.value?.nickname}`,
    icon: 'pi pi-fw pi-home',
    visible: user.value != null,
    items: [
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-home',
        url: '/api/auth/logout',
      }
    ]
  },
)


</script>

<style scoped>
.logo-title {
  font-size: 2.3rem;
  font-weight: 600;
}
</style>
