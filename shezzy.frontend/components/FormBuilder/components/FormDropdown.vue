<template>
  <FormElement :steps="steps" :step="step" :element="element">
    <template #component>
      <Dropdown v-if="element.component" v-model="element.value" :id="element.id" :options="element.options"
        optionLabel="value" optionValue="key"
        :placeholder="getPlaceholderText(element?.label)" :class="element.cssClass" />
    </template>
  </FormElement>
</template>
<script lang="ts" setup>
import Dropdown from 'primevue/dropdown';
import FormElement from '~~/components/FormBuilder/components/FormElement.vue'
import { StepsProps, StepProps, ElementProps } from '~~/components/FormBuilder/components/props/Props'

const props = defineProps({
  ...ElementProps,
  ...StepProps,
  ...StepsProps
});
const getPlaceholderText = (label?: string): string => {
  return `Please select a ${label?.toLocaleLowerCase()}`
}
</script>