import { FirebaseAppService } from './page/classes/firebaseAppService'

export default defineEventHandler(async (event) => {
  try {
    const query: any = getQuery(event)
    //const user = useUser()
    //console.log(user)
    //const pages = await new FirebaseAppService().GetPages(user.value)

    //return pages
  } catch (error) {
    console.log(error)
  }
})