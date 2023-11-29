import React, {
  FC,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from '@mui/material';
// Interface
import { ICreateActivity } from '../activityArea/interfaces/iCreateActivity';
// Helper function
import { sendApiRequest } from '../../helpers/sendApiRequest';
// Context
import { FormContext } from '../../context/FormContext/FormContext';
// Types
import { Types } from '../../context/FormContext/reducers';

export const ActivityButton: FC = (): any => {
  const formContext = useContext(FormContext);
  const { dispatch } = formContext;

  const {
    activity,
    date,
    time,
    status,
    duration,
    updated,
    notValid,
    isSuccess,
  } = formContext.state;

  const [newActivity, setNewActivity] =
    useState<ICreateActivity>({
      activity: activity,
      date: date,
      time: time,
      status: status,
      duration: duration,
    });

  const createActivityMutation = useMutation(
    (data: ICreateActivity) =>
      sendApiRequest(
        'http://localhost:3200/activities',
        'POST',
        data,
      ),
  );

  const resetInput = () => {
    dispatch({
      type: Types.ResetValues,
      payload: {
        date: new Date(),
        time: new Date(),
        duration: 'Add min',
      },
    });
  };

  useEffect(() => {
    setNewActivity({
      activity: activity.toString(),
      date: date && date.toString(),
      time: time && time.toString(),
      status: status.toString(),
      duration: duration && duration.toString(),
    });

    dispatch({
      type: Types.IsLoading,
      payload: createActivityMutation.isLoading,
    });
  }, [
    activity,
    time,
    duration,
    status,
    date,
    createActivityMutation.isLoading,
  ]);

  // Submit data
  const activityHandler = () => {
    if (
      !newActivity.duration ||
      newActivity.duration.substring(
        newActivity.duration.length - 3,
        newActivity.duration.length,
      ) !== 'min'
    ) {
      dispatch({
        type: Types.NotValid,
        payload: true,
      });
      return;
    }
    console.log(newActivity.duration);
    //createActivityMutation.mutate(newActivity);
    resetInput();

    dispatch({
      type: Types.Success,
      payload: true,
    });
  };

  // // If successful submission of session set value back to false after 7 sec
  if (isSuccess) {
    setTimeout(() => {
      dispatch({
        type: Types.Success,
        payload: false,
      });
    }, 7000);
  } else if (notValid) {
    setTimeout(() => {
      dispatch({
        type: Types.NotValid,
        payload: false,
      });
    }, 7000);
  }

  return (
    <Link
      component="button"
      disabled={updated === false}
      onClick={activityHandler}
      sx={{
        backgroundColor: '#4B9D54',
        textDecoration: 'none',
        width: { xs: '50vw', md: '20vw' },
        height: '2.5rem',
        borderRadius: '5px',
        letterSpacing: '2px',
      }}
    >
      ADD TO LIST
    </Link>
  );
};
