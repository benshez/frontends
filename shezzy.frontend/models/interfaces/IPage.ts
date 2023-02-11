import { IStep } from '~~/models/interfaces/IStep'

export interface IPage {
  name: string;
  heading: string;
  steps: Array<IStep>;
  currentStepIndex: number;
}