import { MemeResponse } from '~/models/Meme'
import axios from 'axios'
const API_URL = 'https://api.imgflip.com/get_memes'

export default defineEventHandler(async (event) => {
  try {
    const { PUBLIC_API_BASE } = useRuntimeConfig()
    const weather = await axios.get(`${PUBLIC_API_BASE}/GetWeatherForecast`, {
      headers: {
        Authorization: `Bearer ${event.context.session.access_token}`
      }
    })

    await weather.data

    const response = await axios.get<MemeResponse>(API_URL)
    if (response.status) {
      return response.data
    }
    return []
  } catch (error) {
   // console.error(error)
  }
})
