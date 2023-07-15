
const { privateKey } = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY as string)

const {
  PUBLIC_API_BASE,
  AUTH0_BASE_URL,
  AUTH0_ISSUER_BASE_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_AUDIENCE,
  AUTH0_COOKIE_NAME,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_SERVICE_ACCOUNT_TYPE,
  FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
  FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
  FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
  FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
  FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
  FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
  FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
  FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL
} = process.env

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Shezzy'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    PUBLIC_API_BASE: PUBLIC_API_BASE || process.env.URL,
    AUTH0_BASE_URL: AUTH0_BASE_URL || process.env.URL,
    AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_AUDIENCE,
    AUTH0_COOKIE_NAME,
    FIREBASE_CONFIG: {
      USER_CONFIG: {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: FIREBASE_MEASUREMENT_ID
      },
      SERVICE_ACCOUNT: {
        type: FIREBASE_SERVICE_ACCOUNT_TYPE,
        project_id: FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
        private_key_id: FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
        private_key: privateKey,
        client_email: FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        client_id: FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
        auth_uri: FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
        token_uri: FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
        auth_provider_x509_cert_url: FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL
      }
    },
    public: {
      AUTH0_COOKIE_NAME
    }
  },
  build: {
    transpile: ['primevue']
  },
  // css
  css: [
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    'assets/css/main.css'
  ],
  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
