import React, { FC, ReactElement } from 'react';
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
  // Destructure props
  const {
    disabled = false,
    value = null,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
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
            width: '50%',
            height: '2.8rem',

            zIndex: '1',
          }}
        />
        <DateRangeIcon
          sx={{
            transform: 'translate(-2.5rem, 0.6rem)',
            zIndex: '2',
          }}
        />
      </LocalizationProvider>
    </>
  );
};

ActivityDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
