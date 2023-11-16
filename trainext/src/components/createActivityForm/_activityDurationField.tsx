import React, { FC, ReactElement } from 'react';

import { TextField } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
// Interface
import { IDurationField } from './interfaces/IDurationField';

export const ActivityDurationField: FC<IDurationField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    disabled = false,
    onChange = (duration) => console.log(duration),
  } = props;

  return (
    <>
      <TextField
        id="duration"
        name="duration"
        placeholder="hh:mm"
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
    </>
  );
};
