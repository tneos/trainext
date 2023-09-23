import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { ActivityDateField } from './_activityDateField';
import { ActivityTimeField } from './_activityTimeField';
import { ActivitySelectField } from './_activitySelectField';
// Import enum files
import { Status } from './enums/Status';
import { Activity } from './enums/Activity';

export const CreateActivityForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      mt={8}
      mb={6}
    >
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
        <ActivityDateField />
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
