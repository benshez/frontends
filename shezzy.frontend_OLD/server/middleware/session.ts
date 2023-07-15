import Iron from '@hapi/iron'
import { getCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const { AUTH0_COOKIE_NAME, AUTH0_CLIENT_SECRET } = useRuntimeConfig()
  const cookie = getCookie(event, AUTH0_COOKIE_NAME)
  if (!event.context.session) {
    event.context.session = {}
  }
  if (cookie) {
    const { user, id_token, access_token, expires_in } = await Iron.unseal(cookie, AUTH0_CLIENT_SECRET, Iron.defaults)
    event.context.session.user = user
    event.context.session.id_token = id_token
    event.context.session.access_token = access_token
    event.context.session.expires_in = expires_in
  }
})
