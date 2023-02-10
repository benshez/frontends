<template>
  <Card class="custom">
    <template #content>
      <Steps :model="steps" :readonly="false">
        <template #item="{ item }">
          <span :class="isDisabled(item) ? 'p-menuitem-link p-disabled' : 'p-menuitem-link'" :tabindex="item.pageIndex">
            <span class="p-steps-number">{{ item.pageIndex + 1 }}</span>
            <span class="p-steps-title">{{ item.label }}</span>
          </span>
        </template>
      </Steps>
    </template>
  </Card>
</template>
<script lang="ts" setup>
import { PagesProps, StepsProps } from '~~/components/FormBuilder/components/props/Props'

const props = defineProps({
  ...PagesProps,
  ...StepsProps
});

const isDisabled = (item: any) => {
  return item.pageIndex !== (props.pages[props.pageIndex].currentStepIndex)
}

</script>