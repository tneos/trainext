import { IDisabled } from './IDisabled';

export interface IDurationField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  onClick?: (e: React.MouseEvent) => void;
}
