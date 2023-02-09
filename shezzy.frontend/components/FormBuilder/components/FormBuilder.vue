<template>
  <div>
    <Toast />
    <Card class="custom" v-if="steps">
      <template #content>
        <Steps :model="steps.steps" :readonly="false">
          <template #item="{ item }">
            <span :class="isDisabled(item) ? 'p-menuitem-link p-disabled' : 'p-menuitem-link'"
              :tabindex="item.pageIndex">
              <span class="p-steps-number">{{ item.pageIndex + 1 }}</span>
              <span class="p-steps-title">{{ item.label }}</span>
            </span>
          </template>
        </Steps>
      </template>
    </Card>
    <Card class="mt-3 custom" v-if="steps">
      <template #content>
        <div class="formgrid grid">
          <div class="field w-full" v-for="(element, elementIndex) in steps.steps[steps.currentStepIndex].elements"
            :key="elementIndex">
            <component :is="comp(element)" :steps="steps" :step="step" :element="element" @input="handleInput" v-if="isVisible(steps, element)" />
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
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import FormInput from '~~/components/FormBuilder/components/FormInput.vue';
import FormDropdown from '~~/components/FormBuilder/components/FormDropdown.vue';
import data from '~~/components/FormBuilder/components/data.json'
import { useFormBuilderComponent } from '~~/components/FormBuilder/components/useFormBuilderComponent'
import { ISteps, IStep } from '~~/components/FormBuilder/components/interfaces/IStep'
import { IElement } from '~~/components/FormBuilder/components/interfaces/IElement'

const validationEmitter = defineEmits(["validate"])
const { handleValidate, isVisible } = useFormBuilderComponent()

const toast = useToast();
const steps: Ref<ISteps> = ref(data as ISteps)
const step: Ref<IStep> = ref(steps.value.steps[steps.value.currentStepIndex])

const onNextStepClick = () => {
  handleValidate(validationEmitter, step.value)

  if (step.value?.inValidItemsCount > 0) return

  steps.value.currentStepIndex++;

  step.value = steps.value.steps[steps.value.currentStepIndex]

  const completed = steps.value.currentStepIndex >= steps.value.steps.length

  if (completed) steps.value.currentStepIndex = (steps.value.currentStepIndex - 1)

  if (onIsFinalStep()) complete()
};

const onPrevStepClick = () => {
  steps.value.currentStepIndex--;

  step.value = steps.value.steps[steps.value.currentStepIndex]
  
  const completed = steps.value.currentStepIndex <= 0

  if (completed) steps.value.currentStepIndex = 0
};

const onIsFirstStep = (): boolean => {
  return steps.value.currentStepIndex === 0
}

const onIsFinalStep = (): boolean => {
  const completed = (steps.value.currentStepIndex === (steps.value.steps.length - 1))
  return completed
}

const complete = () => {
  let values: any = [];
  const payload = steps.value.steps.forEach((step) => {
    return step.elements?.forEach((element) => {
      values.push({
        id: element.id,
        value: element.value
      })
    })
  })
  toast.add({ severity: 'success', summary: 'Order submitted', detail: `Dear ${JSON.stringify(values)} your order completed.`, life: 3000 });
};

const isDisabled = (item: any) => {
  return item.pageIndex !== (steps.value.currentStepIndex)
}

const handleInput = (event: any) => {

  const y = event
  // const top = parseInt(event.id.split('.')[0]);
  // const bot = parseInt(event.id.split('.')[1])
  // form.value.steps[top].elements[bot].value = event.value
  // console.log(form.value.steps[top].elements[bot].value)
}

const comp = (element: IElement): any => {
  let component = null;
  switch (element.component) {
    case "FormInput":
      component = FormInput;
      break;
    case "FormDropdown":
      component = FormDropdown;
      break;
  }
  return component
}
</script>
<style lang="scss" scoped>
.p-steps {
  .p-steps-list {
    .p-steps-item {
      .p-menuitem-link {
        .p-steps-number {
          background: #EFF6FF;
          color: #1D4ED8;
        }

        .p-steps-title {
          font-weight: bold;
        }

        &.p-disabled {
          opacity: 1;

          .p-steps-number {
            color: #6c757d;
            background: #ffffff;
          }

          .p-steps-title {
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>