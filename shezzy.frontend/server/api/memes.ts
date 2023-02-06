import { MemeResponse } from '~/models/Meme';
const API_URL = 'https://api.imgflip.com/get_memes'

export default defineEventHandler(async (event) => {
  try {
    const { PUBLIC_API_BASE } = useRuntimeConfig()
    const weather = await fetch(`${PUBLIC_API_BASE}/GetWeatherForecast`, {
      headers: {
        Authorization: `Bearer ${event.context.session.access_token}`
      }
    })

    await weather.json()
    
    const response = await $fetch<MemeResponse>(API_URL)
    if (response.success) {
      return response.data.memes
    }
    return []
  } catch (error) {
    console.error(error)
  }
})
