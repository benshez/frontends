import { useState } from '#app'
import { IStep } from "~~/models/interfaces/IStep"
import usePages from '~~/composables/usePage'

export default function () {
    const page = usePages().value
    const route = useRoute()
    const pageName: string = route.params.id as string

    useState(`steps-${pageName}`, () => page.steps || null)
    return useState<Array<IStep>>(`steps-${pageName}`, () => null as any)
}