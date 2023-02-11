import { IElement } from '~~/models/interfaces/IElement'

export interface IStep {
  label: string;
  pageIndex: number;
  inValidItemsCount: number;
  elements?: Array<IElement>;
}
