import React, { FC, ReactElement } from 'react';

import { Grid, Alert, LinearProgress } from '@mui/material';
import { Logo } from '../logo/logo';
import { ActivityCounter } from '../activityCounter/activityCounter';
import { ActivityComp } from '../activity/activityComp';
import { ActivitiesTotal } from '../activitiesTotal/activitiesTotal';
import { ActivitiesTotalTime } from '../activitiesTotalTime/activitiesTotalTime';
import { ActivitiesTotalDistance } from '../activitiesTotalDistance/activitiesTotalDistance';
// Interfaces
import { IAcitivityApi } from './interfaces/IActivityApi';
import { Status } from '../createActivityForm/enums/Status';
import { IUpdateActivity } from '../createActivityForm/interfaces/IUpdateActivity';
// Helper function
import { countAcitivities } from './helpers/countActivities';
// Query imports
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
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

  // Update activity mutation(
  const updateActivityMutation = useMutation(
    (data: IUpdateActivity) =>
      sendApiRequest(
        'http://localhost:3200/activities',
        'PUT',
        data,
      ),
  );

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateActivityMutation.mutate({
      id,
      status: e.target.checked
        ? Status.started
        : Status.planned,
    });
  }

  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateActivityMutation.mutate({
      id,
      status: Status.completed,
    });
  }

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

          <ActivityCounter
            count={
              data
                ? countAcitivities(data, Status.planned)
                : undefined
            }
            status={Status.planned}
          />
          <ActivityCounter
            count={
              data
                ? countAcitivities(data, Status.started)
                : undefined
            }
            status={Status.started}
          />
          <ActivityCounter
            count={
              data
                ? countAcitivities(data, Status.completed)
                : undefined
            }
            status={Status.completed}
          />
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
              return obj.status === Status.started ||
                obj.status === Status.planned ? (
                <ActivityComp
                  key={index + obj.status}
                  duration={obj.duration}
                  title={obj.activity}
                  date={new Date(obj.date)}
                  status={obj.status}
                  id={obj.id}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompleteHandler}
                />
              ) : (
                false
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
