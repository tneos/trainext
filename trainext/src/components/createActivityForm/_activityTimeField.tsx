import React, { FC, ReactElement, useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimeField } from '@mui/x-date-pickers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const ActivityTimeField: FC = (): ReactElement => {
  const [time, setTime] = useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimeField
        ampm={false}
        value={time}
        onChange={(newValue) => setTime(newValue)}
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
