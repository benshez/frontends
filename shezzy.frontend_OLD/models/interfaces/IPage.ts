import { IStep } from '~~/models/interfaces/IStep'

export interface IPage {
  name: string;
  heading: string;
  path: string;
  steps: Array<IStep>;
  currentStepIndex: number;
  requiresAuthenticaton: boolean;
}