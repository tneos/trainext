import React, { FC, ReactElement } from 'react';

import { Grid, Alert, LinearProgress } from '@mui/material';
import { Logo } from '../logo/logo';
import { ActivityCounter } from '../activityCounter/activityCounter';
import { ActivityComp } from '../activity/activityComp';
import { ActivitiesTotal } from '../activitiesTotal/activitiesTotal';
import { ActivitiesTotalTime } from '../activitiesTotalTime/activitiesTotalTime';
import { ActivitiesTotalDistance } from '../activitiesTotalDistance/activitiesTotalDistance';
// Interface
import { IAcitivityApi } from './interfaces/IActivityApi';

// Query imports
import { useQuery } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';

export const ActivityArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(
    ['activities'],
    async () => {
      return await sendApiRequest<IAcitivityApi[]>(
        'http://localhost:3200/activities',
        'GET',
      );
    },
  );

  data &&
    data.length > 0 &&
    data.map((obj) => console.log(obj.date));

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
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your activities
              </Alert>
            )}
            {!error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity="warning">
                  You don&apos;t have any activities created
                  yet. Start by adding one.
                </Alert>
              )}
          </>

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
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((obj, index) => {
              return (
                <ActivityComp
                  key={index + obj.status}
                  duration={obj.duration}
                  title={obj.activity}
                  date={new Date(obj.date)}
                  status={obj.status}
                  id={obj.id}
                />
              );
            })
          )}
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
