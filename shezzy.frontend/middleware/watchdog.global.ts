import useUser from "~~/composables/useUser";

export default defineNuxtRouteMiddleware((to, from) => {
	const user = useUser()
	const allowedRoutes = ['/', '/login']
	if (to.path === '/slug/home') return
	if (to.path === '/') return navigateTo('/slug/home')
	if (user.value) {
		if (allowedRoutes.includes(to.path)) {
			return navigateTo('/private')
		}
	} else {
		allowedRoutes.push('/slug/about')
		if (!allowedRoutes.includes(to.path)) {
			return navigateTo('/')
		}
	}
})