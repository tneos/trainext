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
            width: { xs: '64px', sm: '96px' },
            height: { xs: '64px', sm: '96px' },
            marginBottom: '16px',
            borderColor: '#000000',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '1.4rem' },
            }}
          >
            {total}
          </Typography>
        </Avatar>
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', md: '1rem' },
            height: { xs: '3rem' },
          }}
        >
          Total time(h)
        </Typography>
      </Box>
    </>
  );
};
