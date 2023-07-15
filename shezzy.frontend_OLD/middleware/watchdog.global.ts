import axios from 'axios'
import useUser from "~~/composables/useUser";
import data from '~~/models/data/data.json'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUser()
  const pages = data.pages
  let res: any
  try {
    //res = (await useAsyncData('page', () => axios.get(`/api/page?page=${to.params.slug}`)))
  } catch {
  } finally {
    //useState(`page-${to.params.slug}`, () => res.data || null)

    const allowedRoutes: any = []
    if (user.value) {
      allowedRoutes.push(['/'])
      if (to.path === '/') return navigateTo('/slug/home')
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
  }
})