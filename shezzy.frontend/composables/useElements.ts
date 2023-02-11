import { useState } from '#app'
import { IElement } from "~~/models/interfaces/IElement"
import usePage from '~~/composables/usePage'
import useSteps from '~~/composables/useSteps'

export default function () {
    const page = usePage().value
    const steps = useSteps().value

    useState(`elements-${page.name}-${page.currentStepIndex}`, () => steps[page.currentStepIndex].elements || null)
    return useState<Array<IElement>>(`elements-${page.name}-${page.currentStepIndex}`, () => null as any)
}