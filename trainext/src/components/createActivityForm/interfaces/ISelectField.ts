import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

export interface ISelectItems {
  value: string;
  label: string;
}

// items property an array of ISelectItems objects
export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => any;
  items?: ISelectItems[];
}
