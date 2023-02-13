import useUser from "~~/composables/useUser";
import data from '~~/models/data/data.json'

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser()
  const pages = data.pages

  const allowedRoutes: any = []
  if (user.value) {
    allowedRoutes.push(['/'])
	if(to.path === '/') return navigateTo('/slug/home')
    if (allowedRoutes.includes(to.path)) {
      return navigateTo('/slug/home')
    }
  } else {
    pages.forEach((page) => {
      if (!page.requiresAuthenticaton) {
        allowedRoutes.push(page.path)
      }
    })

    if (!allowedRoutes.includes(to.path)) {
      return navigateTo('/slug/home')
    }
  }
})