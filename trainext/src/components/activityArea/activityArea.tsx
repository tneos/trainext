import React, { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';
import { Logo } from '../logo/logo';
import { ActivityCounter } from '../activityCounter/activityCounter';
import { ActivityComp } from '../activity/activityComp';
import { ActivitiesTotal } from '../activitiesTotal/activitiesTotal';
import { ActivitiesTotalTime } from '../activitiesTotalTime/activitiesTotalTime';
import { ActivitiesTotalDistance } from '../activitiesTotalDistance/activitiesTotalDistance';

export const ActivityArea: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={7}
      px={4}
      sx={{
        backgroundColor: '#E2E2E2',
        overflowY: 'scroll',
        maxHeight: '100vh',
      }}
    >
      <Logo />
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={12}
          xs={12}
          mb={4}
          mt={4}
        >
          <ActivityCounter />
          <ActivityCounter />
          <ActivityCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <ActivityComp />
          <ActivityComp />
          <ActivityComp />
          <ActivityComp />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={12}
          xs={12}
          mb={4}
          mt={4}
        >
          <ActivitiesTotal />
          <ActivitiesTotalTime />
          <ActivitiesTotalDistance />
        </Grid>
      </Grid>
    </Grid>
  );
};
