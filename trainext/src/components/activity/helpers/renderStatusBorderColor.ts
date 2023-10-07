import { Status } from '../../createActivityForm/enums/Status';
import {
  green,
  blue,
  orange,
  grey,
} from '@mui/material/colors';

export const renderStatusBorderColor = (
  status: string,
): string => {
  const plannedColor = blue.A200;
  const startedColor = orange.A200;
  const completedColor = green.A200;
  const defaultColor = grey.A200;

  switch (status) {
    case Status.planned:
      return plannedColor;
    case Status.started:
      return startedColor;
    case Status.completed:
      return completedColor;
    default:
      return defaultColor;
  }
};
