<template>
  <Toast />
  <Card class="mt-3 custom" v-if="steps">
    <template #header>
      <h4>{{ step.label }}</h4>
    </template>
    <template #content>
      <div class="formgrid grid">
        <div class="field w-full" v-for="(element, elementIndex) in steps[pages[pageIndex].currentStepIndex].elements"
          :key="elementIndex">
          <component :is="comp(element)" :pages="pages" :page-index="pageIndex" :element="element"
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
import { ref, Ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import FormInput from '~~/components/FormBuilder/components/FormInput.vue'
import FormDropdown from '~~/components/FormBuilder/components/FormDropdown.vue'
import FormCheckbox from '~~/components/FormBuilder/components/FormCheckbox.vue'
import FormInputSwitch from '~~/components/FormBuilder/components/FormInputSwitch.vue'
import { useFormBuilderComponent } from '~~/components/FormBuilder/components/useFormBuilderComponent'
import { PagesProps, StepsProps } from '~~/components/FormBuilder/components/props/Props'
import { IStep } from '~~/components/FormBuilder/components/interfaces/IStep'
import { IElement } from '~~/components/FormBuilder/components/interfaces/IElement'

const toast = useToast();
const emitter = defineEmits(['input', 'validate'])
const { handleValidate, isVisible } = useFormBuilderComponent()
const props = defineProps({
  ...PagesProps,
  ...StepsProps
});
const step: Ref<IStep> = ref(props.steps[props.pages[props.pageIndex].currentStepIndex])

const onNextStepClick = () => {
  handleValidate(emitter, step.value)

  if (step.value?.inValidItemsCount > 0) return

  props.pages[props.pageIndex].currentStepIndex++;

  step.value = props.steps[props.pages[props.pageIndex].currentStepIndex]

  const completed = props.pages[props.pageIndex].currentStepIndex >= props.steps.length

  if (completed) props.pages[props.pageIndex].currentStepIndex = (props.pages[props.pageIndex].currentStepIndex - 1)

  if (onIsFinalStep()) complete()
};

const onPrevStepClick = () => {
  props.pages[props.pageIndex].currentStepIndex--;

  step.value = props.steps[props.pages[props.pageIndex].currentStepIndex]

  const completed = props.pages[props.pageIndex].currentStepIndex <= 0

  if (completed) props.pages[props.pageIndex].currentStepIndex = 0
};

const onIsFirstStep = (): boolean => {
  return props.pages[props.pageIndex].currentStepIndex === 0
}

const onIsFinalStep = (): boolean => {
  const completed = (props.pages[props.pageIndex].currentStepIndex === (props.steps.length - 1))
  return completed
}

const complete = () => {
  let values: any = [];
  const payload = props.steps.forEach((step) => {
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