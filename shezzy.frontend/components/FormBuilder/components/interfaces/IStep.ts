import { IElement } from '~~/components/FormBuilder/components/interfaces/IElement'

export interface IStep {
  label: string;
  pageIndex: number;
  inValidItemsCount: number;
  elements?: Array<IElement>;
}