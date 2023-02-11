<template>
  <Toast />
  <Card class="mt-3 custom" v-if="steps && steps.length > 0">
    <template #header>
      <h4>{{ steps[0].label }}</h4>
    </template>
    <template #content>
      <div class="formgrid grid">
        <div class="field w-full" v-for="(element, elementIndex) in steps[page.currentStepIndex].elements"
          :key="elementIndex">
          <component :is="comp(element)" :element="element"
            v-if="isVisible(steps, element)" />
        </div>
      </div>
      <Divider align="left" type="dashed" />
    </template>
    <template #footer>
      <div class="grid no-gutter mt-4 relative">
        <Button @click="onPrevStepClick" v-if="!onIsFirstStep() && !onIsFinalStep()"
          class="absolute bottom-0 left-0">Back</Button>
        <Button @click="onNextStepClick" v-if="!onIsFinalStep()" class="absolute bottom-0 right-0">Next</Button>
      </div>
    </template>
  </Card>
</template>
<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import FormInput from '~~/components/FormBuilder/components/FormInput.vue'
import FormDropdown from '~~/components/FormBuilder/components/FormDropdown.vue'
import FormCheckbox from '~~/components/FormBuilder/components/FormCheckbox.vue'
import FormInputSwitch from '~~/components/FormBuilder/components/FormInputSwitch.vue'
import { useFormBuilderComponent } from '~~/components/FormBuilder/components/useFormBuilderComponent'
import { IElement } from '~~/models/interfaces/IElement'

const toast = useToast()
const page = usePage()
const steps = useSteps()
const step = useStep()
const emitter = defineEmits(['input', 'validate'])
const { handleValidate, isVisible } = useFormBuilderComponent()

const onNextStepClick = () => {
  handleValidate(emitter, step.value)

  if (step.value?.inValidItemsCount > 0) return

  page.value.currentStepIndex++;

  step.value = steps.value[page.value.currentStepIndex]

  const completed = page.value.currentStepIndex >= steps.value.length

  if (completed) page.value.currentStepIndex = (page.value.currentStepIndex - 1)

  if (onIsFinalStep()) complete()
};

const onPrevStepClick = () => {
  page.value.currentStepIndex--;

  step.value = steps.value[page.value.currentStepIndex]

  const completed = page.value.currentStepIndex <= 0

  if (completed) page.value.currentStepIndex = 0
};

const onIsFirstStep = (): boolean => {
  return page.value.currentStepIndex === 0
}

const onIsFinalStep = (): boolean => {
  const completed = (page.value.currentStepIndex === (steps.value.length - 1))
  return completed
}

const complete = () => {
  let values: any = [];
  steps.value.forEach((step) => {
    return step.elements?.forEach((element) => {
      values.push({
        id: element.id,
        value: element.value
      })
    })
  })
  toast.add({ severity: 'success', summary: 'Order submitted', detail: `Dear ${JSON.stringify(values)} your order completed.`, life: 3000 });
};

const comp = (element: IElement): any => {
  let component = null;
  switch (element.component) {
    case 'FormInput':
      component = FormInput
      break
    case 'FormDropdown':
      component = FormDropdown
      break
    case 'FormCheckbox':
      component = FormCheckbox
      break
    case 'FormInputSwitch':
      component = FormInputSwitch
      break
  }
  return component
}

</script>