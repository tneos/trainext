import React, {
  FC,
  ReactElement,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Typography,
  Stack,
  Alert,
  AlertTitle,
  SelectChangeEvent,
} from '@mui/material';

import moment from 'moment';

import { ActivityDateField } from './_activityDateField';
import { ActivityTimeField } from './_activityTimeField';
import { ActivitySelectField } from './_activitySelectField';
import { ActivityDurationField } from './_activityDurationField';

// Import enum files
import { Status } from './enums/Status';
import { Activity } from './enums/Activity';

// Context
import { FormContext } from '../../context/FormContext/FormContext';
import { Types } from '../../context/FormContext/reducers';

export const CreateActivityForm: FC = (): ReactElement => {
  // Initialize context
  const formContext = useContext(FormContext);
  const { state, dispatch } = formContext;

  const [formData, setFormData] = useState(state);
  const [success, setSuccess] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(state.isLoading);

  useEffect(() => {
    if (formContext.state.isSuccess) {
      setSuccess(true);
      dispatch({
        type: Types.Update,
        payload: !state.updated,
      });
    } else {
      setSuccess(false);
    }

    if (formContext.state.isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (formContext.state.notValid) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [
    formContext.state.isSuccess,
    formContext.state.isLoading,
    formContext.state.notValid,
    formContext.state.duration,
    formContext.state.date,
    formContext.state.time,
  ]);

  const onChangeInput = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    e.target.name === 'status'
      ? dispatch({
          type: Types.OptionStatusSelect,
          payload: e.target.value,
        })
      : dispatch({
          type: Types.OptionActivitySelect,
          payload: e.target.value,
        });
  };

  const onChangeDate = (date: Date | null) => {
    setFormData({
      ...formData,
      date: date,
    });

    dispatch({
      type: Types.DateSelect,
      payload: date,
    });
  };

  const onChangeTime = (value: Date | string | null) => {
    setFormData({
      ...formData,
      time: moment(value).format('HH mm'),
    });

    dispatch({
      type: Types.AddTime,
      payload: moment(value).format('HH mm'),
    });
  };

  const onClickDuration = (e: any) => {
    e.target.value = '';
  };

  const onChangeDuration = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    e.target.value.substring(
      e.target.value.length - 3,
      e.target.value.length,
    ) === 'min' &&
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    dispatch({
      type: Types.AddDuration,
      payload: e.target.value,
    });
    e.target.value.substring(
      e.target.value.length - 3,
      e.target.value.length,
    ) === 'min' &&
      dispatch({
        type: Types.Update,
        payload: true,
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      mt={8}
      mb={6}
      sx={{
        position: 'relative',
        marginTop: { xs: '34px', md: '68px' },
        paddingTop: { xs: '1rem', md: '0' },
        marginBottom: { xs: '16px' },
        ['@media (min-height:800px)']: {
          marginTop: '102px',
        },
      }}
    >
      {invalid && (
        <Alert
          severity="error"
          sx={{
            position: 'absolute',
            top: '100%',
            left: '20%',
            width: '60%',
            height: '9vh',
            fontSize: '0.6rem',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <AlertTitle
              sx={{
                fontSize: '0.8rem',
                width: '20%',
                marginBottom: '0',
                height: '2rem',
                lineHeight: '2.2rem',
              }}
            >
              Error
            </AlertTitle>
            <Typography
              variant="h6"
              sx={{
                width: '80%',
                fontSize: '0.65rem',
                lineHeight: '2rem',
                height: '2rem',
              }}
            >
              Please add duration in the right format
            </Typography>
          </Box>
        </Alert>
      )}
      {success && (
        <Alert
          severity="success"
          sx={{
            position: 'absolute',
            top: '100%',
            left: '20%',
            width: '60%',
            height: '9vh',
            fontSize: '0.6rem',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <AlertTitle
              sx={{
                fontSize: '0.8rem',
                width: '33%',
                marginBottom: '0',
                height: '2rem',
                lineHeight: '2.2rem',
              }}
            >
              Success
            </AlertTitle>
            <Typography
              variant="h6"
              sx={{
                width: '60%',
                fontSize: '0.65rem',
                lineHeight: '2rem',
                height: '2rem',
              }}
            >
              Activity added to your log
            </Typography>
          </Box>
        </Alert>
      )}

      <Typography
        mb={2}
        component="h2"
        variant="h6"
        sx={{
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: '1px',
          zIndex: '4',
        }}
      >
        Add Activity
      </Typography>
      <Stack
        sx={{
          width: '100%',
          paddingTop: { xs: '1rem' },
          position: 'relative',
        }}
      >
        <ActivitySelectField
          label="Activity"
          name="activity"
          value={formData.activity}
          disabled={loading}
          onChange={onChangeInput}
          items={[
            {
              value: Activity.walking,
              label:
                Activity.walking.charAt(0).toUpperCase() +
                Activity.walking.slice(1),
            },
            {
              value: Activity.running,
              label:
                Activity.running.charAt(0).toUpperCase() +
                Activity.running.slice(1),
            },
            {
              value: Activity.swimming,
              label:
                Activity.swimming.charAt(0).toUpperCase() +
                Activity.swimming.slice(1),
            },
            {
              value: Activity.rowing,
              label:
                Activity.rowing.charAt(0).toUpperCase() +
                Activity.rowing.slice(1),
            },
            {
              value: Activity.cycling,
              label:
                Activity.cycling.charAt(0).toUpperCase() +
                Activity.cycling.slice(1),
            },
          ]}
        />
      </Stack>
      <Stack
        sx={{
          width: '100%',
          height: { xs: '18vh', sm: '8vh' },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          marginTop: { xs: '32px' },
          ['@media (min-height:800px)']: {
            marginTop: '72px',
          },
        }}
        display="flex"
        mt={8}
        spacing={2}
      >
        <ActivityDateField
          value={formData.date}
          disabled={loading}
          onChange={onChangeDate}
        />
        <ActivityTimeField
          disabled={loading}
          onChange={onChangeTime}
        />
      </Stack>
      <Stack
        sx={{
          width: '100%',
          height: { xs: '18vh', sm: '8vh' },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          marginTop: { xs: '36px' },
          ['@media (min-height:800px)']: {
            marginTop: '64px',
          },
        }}
        display="flex"
        spacing={2}
        mt={4}
      >
        <ActivitySelectField
          label="Status"
          name="status"
          value={formData.status}
          disabled={loading}
          onChange={onChangeInput}
          items={[
            {
              value: Status.planned,
              label:
                Status.planned.charAt(0).toUpperCase() +
                Status.planned.slice(1),
            },
            {
              value: Status.started,
              label:
                Status.started.charAt(0).toUpperCase() +
                Status.started.slice(1),
            },
            {
              value: Status.completed,
              label:
                Status.completed.charAt(0).toUpperCase() +
                Status.completed.slice(1),
            },
          ]}
        />
        <ActivityDurationField
          disabled={loading}
          onChange={onChangeDuration}
          onClick={onClickDuration}
        />
      </Stack>
    </Box>
  );
};
