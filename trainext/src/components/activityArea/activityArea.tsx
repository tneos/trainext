import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
} from 'react';

import { Grid, Alert, LinearProgress } from '@mui/material';
import { Logo } from '../logo/logo';
import { ActivityCounter } from '../activityCounter/activityCounter';
import { ActivityComp } from '../activity/activityComp';
import { ActivitiesTotal } from '../activitiesTotal/activitiesTotal';
import { ActivitiesTotalTime } from '../activitiesTotalTime/activitiesTotalTime';
import { FavouriteActivity } from '../favouriteActivity/favouriteActivity';
// Interfaces
import { IAcitivityApi } from './interfaces/IActivityApi';
import { Status } from '../createActivityForm/enums/Status';
import { IUpdateActivity } from '../createActivityForm/interfaces/IUpdateActivity';
// Helper function
import { countActivities } from './helpers/countActivities';
import { countTotals } from './helpers/countTotals';
import { findMostFrequent } from './helpers/findMostFrequent';
import { compareMostFrequent } from './helpers/compareMostFrequent';
// Query imports
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
// Helper function
import { sendApiRequest } from '../../helpers/sendApiRequest';
// Context
import { FormContext } from '../../context';
import { Types } from '../../context/FormContext/ActivityReducer';

export const ActivityArea: FC = (): ReactElement => {
  const formContext = useContext(FormContext);
  const { state, dispatch } = formContext;
  const queryClient = useQueryClient();

  const { error, isLoading, data, refetch } = useQuery(
    ['activities'],
    async () => {
      return process.env.REACT_APP_ENV !== 'development'
        ? await sendApiRequest<IAcitivityApi[]>(
            'https://trainext-api.onrender.com/activities',
            'GET',
          )
        : await sendApiRequest<IAcitivityApi[]>(
            'http://localhost:3100/activities',
            'GET',
          );
    },
  );

  // Update activity mutation(
  const updateActivityMutation = useMutation({
    mutationFn: (data: IUpdateActivity) =>
      process.env.REACT_APP_ENV !== 'development'
        ? sendApiRequest(
            'https://trainext-api.onrender.com/activities',
            'PUT',
            data,
          )
        : sendApiRequest(
            'http://localhost:3100/activities',
            'PUT',
            data,
          ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activities'],
      });
    },
  });

  // Update UI when new activity sent to database
  useEffect(() => {
    refetch();
  }, [state.updated]);

  // Update UI when activity updated
  useEffect(() => {
    if (updateActivityMutation.isSuccess) {
      dispatch({
        type: Types.Update,
        payload: !state.updated,
      });
    }
  }, [updateActivityMutation.isSuccess]);

  // API request to update status
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

  // API request to to set status to completed
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
      md={6}
      lg={7}
      px={4}
      sx={{
        backgroundColor: '#E2E2E2',
        overflowY: 'scroll',
        width: '100%',
        height: '100%',
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
          <ActivityCounter
            count={
              data
                ? countActivities(data, Status.planned)
                : undefined
            }
            status={Status.planned}
          />
          <ActivityCounter
            count={
              data
                ? countActivities(data, Status.started)
                : undefined
            }
            status={Status.started}
          />
          <ActivityCounter
            count={
              data
                ? countActivities(data, Status.completed)
                : undefined
            }
            status={Status.completed}
          />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={12}
          sm={8}
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
            {!error &&
              Array.isArray(data) &&
              data.length > 0 &&
              data.every(
                (obj) => obj.status === 'completed',
              ) && (
                <Alert severity="warning">
                  All your current activities are completed.
                  Plan a new one.
                </Alert>
              )}
          </>
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
          <ActivitiesTotal
            total={data ? countTotals(data)[0] : undefined}
          />
          <ActivitiesTotalTime
            total={
              data &&
              countTotals(data)[2].toString() !== '0'
                ? countTotals(data)[1].toString() +
                  ':' +
                  countTotals(data)[2].toString()
                : data &&
                  countTotals(data)[2].toString() === '0'
                ? countTotals(data)[1].toString() +
                  ':' +
                  countTotals(data)[2].toString() +
                  '0'
                : undefined
            }
          />
          <FavouriteActivity
            activity={
              data &&
              Array.isArray(findMostFrequent(data)) &&
              findMostFrequent(data).length > 1
                ? compareMostFrequent(
                    data,
                    findMostFrequent(data),
                  )
                : findMostFrequent(data)[0]
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
