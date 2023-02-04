import useUser from "~~/composables/useUser";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()
  const allowedRoutes = ['/', '/login', '/about']
  if (user.value) {
    if (allowedRoutes.includes(to.path)) {
      return navigateTo('/private')
    }
  } else {
    if (!allowedRoutes.includes(to.path)) {
      return navigateTo('/')
    }
  }
})