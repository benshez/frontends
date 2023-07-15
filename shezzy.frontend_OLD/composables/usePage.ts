import { useState } from '#app'
import { IPage } from "~~/models/interfaces/IPage"
import data from '~~/models/data/data.json'

export default function () {
//export const usePage = async () => {
  const route = useRoute()
  const pageName: string = route.params.slug as string
  // let thePage: IPage

  // const pages: Array<IPage> = data.pages as Array<IPage>

  // pages.forEach((page: IPage) => {
  //     if (page.name === pageName) thePage = page
  // })

  // useState(`page-${pageName}`, () => thePage || null)
  return useState<IPage>(`page-${pageName}`, () => null as any)
}