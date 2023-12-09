import React, { FC, ReactElement, useContext } from 'react';
import { Box } from '@mui/material';
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
      <TextField
        label="Add duration"
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
          width: { xs: '85%', sm: '80%' },
          margin: '0 5% 0 1.2em',
          alignSelf: { xs: 'center' },
          height: '2.8rem',
          zIndex: '1',
        }}
      />
      <AccessTimeIcon
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          zIndex: '3',
          transform: {
            xs: 'translate(-8.8vw, 0.5rem)',
            md: 'translate(-3.8vw, 0.5rem)',
          },
        }}
      />
    </Box>
  );
};
