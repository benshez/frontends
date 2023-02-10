<template>
  <div v-if="pages">
    <h1>{{ pages[pageIndex].heading }}</h1>
    <FormStepper :pages="pages" :page-index="pageIndex" :steps="steps" v-if="steps" />
    <FormBody :pages="pages" :page-index="pageIndex" :steps="steps" v-if="steps" @data-input="updateData" />
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue';
import FormStepper from '~~/components/FormBuilder/components/FormStepper.vue'
import FormBody from '~~/components/FormBuilder/components/FormBody.vue'
import data from '~~/components/FormBuilder/components/data.json'
import { useFormBuilderComponent } from '~~/components/FormBuilder/components/useFormBuilderComponent'
import { IPage } from '~~/components/FormBuilder/components/interfaces/IPage'
import { IStep } from '~~/components/FormBuilder/components/interfaces/IStep'

const route = useRoute()
const routeName: string = route?.name?.toString() as string
const { findPageIndex } = useFormBuilderComponent()
const pages: Ref<Array<IPage>> = ref(data.pages as Array<IPage>)
const pageIndex = findPageIndex(pages.value, routeName)
const steps: Ref<Array<IStep>> = ref(pages.value[pageIndex].steps)

const updateData = (event: any) => {

  const y = event
  // const top = parseInt(event.id.split('.')[0]);
  // const bot = parseInt(event.id.split('.')[1])
  // form.value.steps[top].elements[bot].value = event.value
  // console.log(form.value.steps[top].elements[bot].value)
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