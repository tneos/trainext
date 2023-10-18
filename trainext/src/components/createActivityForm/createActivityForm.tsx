import React, { FC, ReactElement, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Alert,
  AlertTitle,
} from '@mui/material';

import { ActivityDateField } from './_activityDateField';
import { ActivityTimeField } from './_activityTimeField';
import { ActivitySelectField } from './_activitySelectField';
// Import enum files
import { Status } from './enums/Status';
import { Activity } from './enums/Activity';

export const CreateActivityForm: FC = (): ReactElement => {
  // Component inputs state
  const [activity, setActivity] = useState<string>(
    Activity.running,
  );
  const [date, setDate] = useState<Date | null>(new Date());

  const [status, setStatus] = useState<string>(
    Status.planned,
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      mt={8}
      mb={6}
      sx={{ position: 'relative' }}
    >
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
        sx={{ width: '100%' }}
        className="select-activity"
      >
        <ActivitySelectField
          label="Activity"
          name="activity"
          value={activity}
          onChange={(e) =>
            setActivity(e.target.value as string)
          }
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
        sx={{ width: '100%', height: '8vh' }}
        display="flex"
        direction="row"
        justifyContent="space-between"
        mt={8}
        spacing={2}
      >
        <ActivityDateField
          value={date}
          onChange={(date) => setDate(date)}
        />
        <ActivityTimeField />
      </Stack>
      <Stack
        sx={{ width: '100%', height: '8vh' }}
        display="flex"
        direction="row"
        justifyContent="space-between"
        spacing={4}
        mt={4}
      >
        <ActivitySelectField
          label="Status"
          name="status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as string)
          }
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
          ]}
        />
        <ActivityTimeField />
      </Stack>
    </Box>
  );
};
