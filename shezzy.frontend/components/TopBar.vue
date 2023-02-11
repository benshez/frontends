<template>
  <Menubar :model="items">
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
const user = useUser()

const items = [
  {
    label: `Login`,
    icon: 'pi pi-fw pi-home',
    url: '/api/auth/login',
    visible: user.value === null
  },
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/slug/home'
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-file',
    to: '/slug/about'
  },
  {
    label: 'Profile',
    icon: 'pi pi-fw pi-user',
    to: '/slug/profile',
    visible: user.value != null
  },
  {
    label: 'Survey',
    icon: 'pi pi-fw pi-user',
    to: '/slug/survey',
    visible: user.value != null
  },
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
]
</script>

<style scoped>
.logo-title {
  font-size: 2.3rem;
  font-weight: 600;
}
</style>
