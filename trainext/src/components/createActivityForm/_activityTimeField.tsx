import React, { FC, ReactElement, useContext } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimeField } from '@mui/x-date-pickers';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
// Interface
import { ITimeField } from './interfaces/ITimeField';
// Context
import { FormContext } from '../../context';

export const ActivityTimeField: FC<ITimeField> = (
  props,
): ReactElement => {
  const formContext = useContext(FormContext);
  const { state } = formContext;

  // Destructure props
  const {
    disabled = false,
    onChange = (time: Date | string | null) =>
      console.log(time),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimeField
        id="time"
        name="time"
        value={state.date}
        disabled={disabled}
        onChange={onChange}
        sx={{
          '&::before': {
            content: '""',
            backgroundColor: '#E2E2E2',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: '1',
            opacity: '0.65',
          },
          width: '50%',
          height: '2.8rem',
          margin: '0',
          zIndex: '1',
        }}
      />
      <AccessTimeIcon
        sx={{
          transform: 'translate(-2.5rem, 0.6rem)',
          zIndex: '3',
        }}
      />
    </LocalizationProvider>
  );
};
