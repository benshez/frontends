import * as Iron from '@hapi/iron'
import { Authorise } from "../../classes/authorise";

export default defineEventHandler(async (event) => {
  const {
    AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_COOKIE_NAME
  } = useRuntimeConfig()

  try {
    const query = getQuery(event)
    if (query?.error || !query.code) {
      throw new Error(String(query.message))
    }

    const auth = new Authorise(useRuntimeConfig());
    const { access_token, id_token, scope, expires_in, token_type } = await auth.Tokenise(query);
    const { payload: user } = await auth.Verify(id_token)

    const cookie = {
      user,
      id_token,
      access_token,
      scope,
      expires_in,
      token_type
    }

    const date = new Date()
    date.setDate(date.getDate() + 1)

    const sealedCookie = await Iron.seal(cookie, AUTH0_CLIENT_SECRET, Iron.defaults)

    setCookie(event, AUTH0_COOKIE_NAME, sealedCookie, {
      path: '/',
      secure: true,
      sameSite: 'lax',
      expires: date
    })

    event.node.res
      .writeHead(302, {
        Location: '/'
      })
      .end()
  } catch (error) {
    event.node.res.errored
  }
})
