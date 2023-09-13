import React, { FC, ReactElement, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Icon } from '@mui/material';

import DateRangeIcon from '@mui/icons-material/DateRange';

export const ActivityDateField: FC = (): ReactElement => {
  // Component state
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date"
          format="dd/MM/yyyy"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          slots={{
            openPickerIcon: Icon,
          }}
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
            zIndex: '1',
          }}
        />
        <DateRangeIcon
          sx={{
            transform: 'translate(11rem, -3.5rem)',
            zIndex: '2',
          }}
        />
      </LocalizationProvider>
    </>
  );
};
