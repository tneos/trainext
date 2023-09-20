import React, { FC, ReactElement } from 'react';

import { Grid, Box } from '@mui/material';
import Image from '../../images/background.jpg';

import { Profile } from '../profile/profile';
import { CreateActivityForm } from '../createActivityForm/createActivityForm';
import { ActivityButton } from '../createActivityForm/_activityButton';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={5}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '41.7%',
          top: '0px',
          right: '0',
          bottom: '0px',

          opacity: '0.35',
          WebkitFilter: 'grayscale(1)',
        },
        height: '100vh',
        width: '100%',
      }}
    >
      <Profile />
      <CreateActivityForm />
      <Box
        sx={{
          position: 'absolute',
          right: '12%',
        }}
      >
        <ActivityButton />
      </Box>
    </Grid>
  );
};
