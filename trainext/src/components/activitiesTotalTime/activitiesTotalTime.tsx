import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { IActivitiesTotalTime } from './IActivitiesTotalTime';

export const ActivitiesTotalTime: FC<
  IActivitiesTotalTime
> = (props): ReactElement => {
  // Destructure props
  const { total = 'hh.mm' } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            color: '#000000',
            border: '3px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: '#000000',
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: '1.4rem' }}
          >
            {total}
          </Typography>
        </Avatar>
        <Typography>Total time(h)</Typography>
      </Box>
    </>
  );
};
