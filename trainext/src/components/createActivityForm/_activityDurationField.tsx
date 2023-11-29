import React, { FC, ReactElement, useContext } from 'react';

import { TextField } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
// Interface
import { IDurationField } from './interfaces/IDurationField';
// Context
import { FormContext } from '../../context';

export const ActivityDurationField: FC<IDurationField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    disabled = false,
    onChange = (duration) => console.log(duration),
    onClick = (duration) => console.log(duration),
  } = props;

  const formContext = useContext(FormContext);
  const { state } = formContext;

  return (
    <>
      <TextField
        id="duration"
        name="duration"
        value={state.duration}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
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
