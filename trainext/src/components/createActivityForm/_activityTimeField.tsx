import React, { FC, ReactElement, useContext } from 'react';
import { Box } from '@mui/material';
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
    <Box
      position="relative"
      className="timefield"
      sx={{
        width: { xs: '80%', sm: '50%' },
        margin: {
          xs: '0 10% !important',
          sm: '0 !important',
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimeField
          label="Time"
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
            width: { xs: '80%', sm: '80%' },
            margin: '0 5%',
            alignSelf: { xs: 'center' },
            height: '2.8rem',
            zIndex: '1',
          }}
        />
        <AccessTimeIcon
          sx={{
            position: 'absolute',
            zIndex: '2',
            transform: 'translate(-3.8rem, 0.5rem)',
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
