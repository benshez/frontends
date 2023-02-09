import { PropType } from 'vue';
import { IStep, ISteps } from '~~/components/FormBuilder/components/interfaces/IStep'
import { IElement } from '~~/components/FormBuilder/components/interfaces/IElement'

export type IStepsProps = {
  steps: {
    type: PropType<ISteps>,
    required: true
  }
}

export const StepsProps: IStepsProps = {
  steps: {
    type: Object as PropType<ISteps>,
    required: true
  }
}

export type IStepProps = {
  step: {
    type: PropType<IStep>,
    required: true
  }
}

export const StepProps: IStepProps = {
  step: {
    type: Object as PropType<IStep>,
    required: true
  }
}

export interface IElementProps {
  element: {
    type: PropType<IElement>,
    required: true
  }
}

export const ElementProps: IElementProps = {
  element: {
    type: Object as PropType<IElement>,
    required: true
  }
}