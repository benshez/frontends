const {
  PUBLIC_API_BASE,
  AUTH0_BASE_URL,
  AUTH0_ISSUER_BASE_URL,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_AUDIENCE,
  AUTH0_COOKIE_NAME
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
  ]
})
