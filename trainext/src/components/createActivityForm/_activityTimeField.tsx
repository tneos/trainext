import React, { FC, ReactElement } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimeField } from '@mui/x-date-pickers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const ActivityTimeField: FC = (): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimeField
        ampm={false}
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
          height: '100%',
          //position: 'relative',
          margin: '0',
          zIndex: '1',
        }}
      />
      <AccessTimeIcon
        sx={{
          // position: 'absolute',
          // top: '0',
          // left: '0',
          transform: 'translate(-2.5rem, 0.9rem)',
          zIndex: '3',
        }}
      />
    </LocalizationProvider>
  );
};