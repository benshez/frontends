import { useState } from '#app'
import { IStep } from "~~/models/interfaces/IStep"

export default function () {
    const page = usePage().value
    const steps = useSteps().value

    useState(`step-${page.name}-${page.currentStepIndex}`, () => steps[page.currentStepIndex]|| null)
    return useState<IStep>(`step-${page.name}-${page.currentStepIndex}`, () => null as any)
}