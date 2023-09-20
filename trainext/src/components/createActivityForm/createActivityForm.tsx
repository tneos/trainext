import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { ActivityDateField } from './_activityDateField';
import { ActivityTimeField } from './_activityTimeField';
import { ActivitySelectField } from './_activitySelectField';

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
        <ActivitySelectField />
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
        <ActivitySelectField />
        <ActivityTimeField />
      </Stack>
    </Box>
  );
};
