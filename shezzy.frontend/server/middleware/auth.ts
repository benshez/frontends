import { getCookie } from 'h3'
import data from '~~/models/data/data.json'

export default defineEventHandler((event) => {
  const { AUTH0_COOKIE_NAME } = useRuntimeConfig()
  const token = getCookie(event, AUTH0_COOKIE_NAME)
  let isPrivateRoute = false

  if (event.node.req.url?.includes('/api/auth/')) {
    return
  }
  
  data.pages.forEach((page) => {
    if (page.requiresAuthenticaton && event.node.req.url?.includes(page.path)) isPrivateRoute = true
  })

  if(isPrivateRoute) return

  if (event.node.req.url?.includes('/api/')) {
    if (Boolean(token) !== true) {
      event.node.res.statusCode = 401
      event.node.res.writeHead(401).end('You must be signed in to access to resource.')
    }
  }
})
