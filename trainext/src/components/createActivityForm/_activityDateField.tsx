import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

import { Icon } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const ActivityDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    value = new Date(),
    onChange = (date: Date | null) => console.log(date),
  } = props;

  return (
    <Box
      position="relative"
      sx={{
        width: { xs: '80%', sm: '50%' },
        margin: {
          xs: '0 10% !important',
          sm: '0 !important',
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
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
            width: { xs: '80%', sm: '80%' },
            margin: '0 5%',
            alignSelf: { xs: 'center' },
            height: '2.8rem',

            zIndex: '1',
          }}
        />
        <DateRangeIcon
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

ActivityDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
