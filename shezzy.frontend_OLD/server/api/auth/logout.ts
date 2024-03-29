export default defineEventHandler(async (event) => {
  const { AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, AUTH0_COOKIE_NAME, AUTH0_BASE_URL } = useRuntimeConfig()
  event.context.session = null
  deleteCookie(event, AUTH0_COOKIE_NAME)

  event.node.res
    .writeHead(302, {
      Location: `${AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${AUTH0_BASE_URL}/slug/home`
    })
    .end()
})
