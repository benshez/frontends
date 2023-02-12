import { useState } from '#app'
import { IStep } from "~~/models/interfaces/IStep"

export default function () {
    const page = usePage().value
    const route = useRoute()
    const pageName: string = route.params.slug as string

    useState(`steps-${pageName}`, () => page.steps || null)
    return useState<Array<IStep>>(`steps-${pageName}`, () => null as any)
}