import * as firebase from 'firebase/app'
import { onValue, ref, child, get } from 'firebase/database'
import * as database from 'firebase/database'
import firebaseAdmin from 'firebase-admin'
import { getAuth, signInWithCustomToken, UserCredential } from 'firebase/auth'
import { IPage } from "~~/models/interfaces/IPage"

export class FirebaseAppService {
  private static _instance = new FirebaseAppService()
  private _config: any
  private _admin: firebaseAdmin.app.App | undefined
  private _app: firebase.FirebaseApp | undefined
  private _database: database.Database | undefined
  private _user: any
  private _pages: Array<IPage> = []
  private _page: IPage = {
    name: '',
    heading: '',
    path: '',
    steps: [],
    currentStepIndex: 0,
    requiresAuthenticaton: false,
  }

  constructor() {
    this._config = useRuntimeConfig().FIREBASE_CONFIG
    this._admin = this.InitialiseServiceAccount()
    this._app = this.InitialiseUserAccount()
  }

  InitialiseServiceAccount(): firebaseAdmin.app.App {
    try {
      return firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(this._config.SERVICE_ACCOUNT),
        databaseURL: this._config.USER_CONFIG.databaseURL
      })
    } catch {
      return firebaseAdmin.app()
    }
  }

  InitialiseUserAccount(): firebase.FirebaseApp {
    try {
      return firebase.initializeApp(this._config.USER_CONFIG)
    } catch {
      return firebase.getApp()
    }
  }

  InitialiseDataBase(): void {
    this._database = database.getDatabase(this._app)
  }

  async CreateUser(): Promise<void> {
    try {
      await firebaseAdmin.auth().getUser(this._user.email)
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        await firebaseAdmin
          .auth()
          .createUser(
            {
              providerToLink: this._user.sub,
              displayName: this._user.given_name,
              emailVerified: this._user.email_verified,
              uid: this._user.email,
              email: this._user.email
            }
          )
      }
    }
  }

  async CreateCustomToken(): Promise<string> {
    return await firebaseAdmin
      .auth()
      .createCustomToken(this._user.email, { admin: true })
  }

  async SignInWithCustomToken(): Promise<void> {
    await signInWithCustomToken(getAuth(), await this.CreateCustomToken())
  }

  async TokeniseAndInitialiseDataBase(): Promise<void> {
    await this.SignInWithCustomToken()
    this.InitialiseDataBase()
  }

  async GetPages(user: any): Promise<Array<IPage>> {
    this._pages = []
    this._user = user
    this.CreateUser()
    await this.TokeniseAndInitialiseDataBase()

    if (this._database) {
      const dbRef = ref(this._database)
      await get(child(dbRef, `pages`)).then((snapshot) => {
        if (snapshot.exists()) {
          this._pages = snapshot.val()
        }
      })
    }

    return this._pages
  }

  async GetPage(pageName: string, user: any): Promise<IPage> {
    await this.GetPages(user)

    this._pages.forEach((page: IPage) => {
      if (page.name === pageName) this._page = page
    })
 
    return this._page
  }

  static get instance() {
    return this._instance;
  }
}

export default FirebaseAppService.instance;