import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { ActivityDateField } from './_activityDateField';

export const CreateActivityForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      mt={12}
      mb={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Add Activity
      </Typography>
      <Stack sx={{ width: '50%' }} spacing={2}>
        <ActivityDateField />
      </Stack>
      {/* Activity Title-Status*/}
      {/* Activity Date*/}

      {/* Activity Time-Duration*/}
    </Box>
  );
};
