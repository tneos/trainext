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
      md={5}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: { xs: '100%' },
          top: '0',
          right: '0',
          bottom: '0px',

          opacity: '0.35',
          WebkitFilter: 'grayscale(1)',
        },
        position: 'relative',
        overflowY: 'scroll',
        height: 'auto',
        minHeight: '100% !important',
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
          textAlign: 'center',
          ['@media (min-height:801px)']: {
            marginTop: '10rem',
          },
        }}
      >
        <ActivityButton />
      </Box>
    </Grid>
  );
};
