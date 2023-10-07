import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';

export const ActivitiesTotalTime: FC = (): ReactElement => {
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
            3:42
          </Typography>
        </Avatar>
        <Typography>Total time(h)</Typography>
      </Box>
    </>
  );
};
