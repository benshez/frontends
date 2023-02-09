<template>
  <div class="w-full" v-if="element.visible">
    <slot name="label">
      <label :for="element.id" v-if="element.label">{{ element.label }}</label>
    </slot>
    <slot name="component">
      <div v-if="element.readonly" class="w-full">{{ element.value }}</div>
    </slot>
    <slot name="help">
      <small :id="`${element.id}-help`" v-if="element.helpText">{{ element.helpText }}</small>
    </slot>    
  </div>
</template>
<script lang="ts" setup>
import { useFormBuilderComponent } from '~~/components/FormBuilder/components/useFormBuilderComponent'
import { StepsProps, StepProps, ElementProps } from '~~/components/FormBuilder/components/props/Props'

const inputEmmiter = defineEmits(["input"])
const { handleInput } = useFormBuilderComponent()
const props = defineProps({
  ...ElementProps,
  ...StepProps,
  ...StepsProps
});
</script>