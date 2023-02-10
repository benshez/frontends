<template>
  <Menubar :model="items">
    <template #start>
      A logo goes here...
    </template>

    <template #end>
      <div v-if="user" class="flex align-items-center">
        <p class="mr-2">Welcome, {{ user.nickname }} | <a href="/api/auth/logout">Logout</a>
        </p>
        <Avatar :image="user.picture" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
const user = useUser()

const onLoginClick = async () => {
  await useFetch<any>('/api/auth/login', { server: false })
}

const onLogoutClick = async () => {
  await useFetch<any>('/api/auth/logout', { server: true })
}

const items = [
  {
    label: `Welcome, ${user?.value?.nickname}`,
    icon: 'pi pi-fw pi-home',
    url: '/api/auth/logout',
    visible: user.value != null
  },
  {
    label: `Login`,
    icon: 'pi pi-fw pi-home',
    url: '/api/auth/login',
    visible: user.value === null
  },  
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-file',
    to: '/about'
  },
  {
    label: 'Profile',
    icon: 'pi pi-fw pi-user',
    to: '/profile',
    visible: user.value != null
  },
  {
    label: 'Survey',
    icon: 'pi pi-fw pi-user',
    to: '/survey',
    visible: user.value != null
  }
]
</script>

<style scoped>
.logo-title {
  font-size: 2.3rem;
  font-weight: 600;
}
</style>
