import { IDisabled } from './IDisabled';

export interface ITimeField extends IDisabled {
  onChange?: (e: Date | string | null) => void;
}
