import React, { FC, ReactElement, useContext } from 'react';

import { Grid, Box, LinearProgress } from '@mui/material';
import Image from '../../images/background.jpg';

import { Profile } from '../profile/profile';
import { CreateActivityForm } from '../createActivityForm/createActivityForm';
import { ActivityButton } from '../createActivityForm/_activityButton';
import { FormContext } from '../../context';

export const Sidebar: FC = (): ReactElement => {
  const formContext = useContext(FormContext);
  const { isLoading } = formContext.state;

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
          width: { md: '41.7%', xs: '100%' },
          height: { xs: '100%' },
          top: { md: '0px', xs: '77%' },
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

      {isLoading && (
        <LinearProgress
          sx={{
            width: '22%',
            marginBottom: '0.5rem',
            marginLeft: '10%',
            position: 'absolute',
            bottom: '1%',
          }}
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          right: { xs: '27.8%', md: '10.8%' },
        }}
      >
        <ActivityButton />
      </Box>
    </Grid>
  );
};
