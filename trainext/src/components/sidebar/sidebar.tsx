import React, { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';
import Image from '../../images/background.jpg';

import { Profile } from '../profile/profile';
import { CreateActivityForm } from '../createActivityForm/createActivityForm';

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
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
          opacity: '0.35',
        },
        height: '100vh',
        width: '100%',
        WebkitFilter: 'grayscale(1)',
      }}
    >
      <Profile />
      <CreateActivityForm />
    </Grid>
  );
};
