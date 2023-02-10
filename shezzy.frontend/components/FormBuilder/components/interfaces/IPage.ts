import { IStep } from '~~/components/FormBuilder/components/interfaces/IStep'

export interface IPage {
  name: string;
  heading: string;
  steps: Array<IStep>;
  currentStepIndex: number;
}