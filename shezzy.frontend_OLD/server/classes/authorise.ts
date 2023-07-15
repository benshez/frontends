import { AuthToken } from '../interfaces/AuthToken';
import { createRemoteJWKSet, jwtVerify } from 'jose';

export class Authorise {
  private static _instance = new Authorise();
  private _config: any;

  constructor(config: any = {}) {
    this._config = config;
  }

  async Tokenise<T>(query: any): Promise<AuthToken> {
    const {
      AUTH0_BASE_URL,
      AUTH0_ISSUER_BASE_URL,
      AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET
    } = this._config

    const body = JSON.stringify({
      grant_type: 'authorization_code',
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      code: query.code,
      redirect_uri: `${AUTH0_BASE_URL}/api/auth/callback`
    }).toString()

    const response = await fetch(`${AUTH0_ISSUER_BASE_URL}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body
    })

    return await response.json()
  }

  async Verify<T>(id_token: string): Promise<{ payload: any }> {
    const {
      AUTH0_ISSUER_BASE_URL
    } = this._config

    const JWKS = createRemoteJWKSet(new URL(`${AUTH0_ISSUER_BASE_URL}/.well-known/jwks.json`))

    return await jwtVerify(id_token, JWKS, {
      issuer: `${AUTH0_ISSUER_BASE_URL}/`,
      algorithms: ['RS256']
    })
  }
  
  IsAuthenticated(): boolean {
    /*TODO need to get token expiry datetime from user*/
    const user = useUser()
    const expiresAt = user.value.exp || new Date().getTime();
    return new Date().getTime() < expiresAt;
  }

  static get instance() {
    return this._instance;
  }
}

export default Authorise.instance;