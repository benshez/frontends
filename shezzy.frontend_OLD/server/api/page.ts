import { FirebaseAppService } from './page/classes/firebaseAppService'

export default defineEventHandler(async (event) => {
  try {
    const query: any = getQuery(event)

    const page = await new FirebaseAppService().GetPage(query.page, event.context.session.user)

    //console.log(page)

    return page
  } catch (error) {
    console.log(error)
  }
})