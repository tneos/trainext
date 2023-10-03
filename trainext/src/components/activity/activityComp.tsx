import React, { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import { ActivityInfo } from './_activityInfo';
import { ActivityButtons } from './_activityButtons';

export const ActivityComp: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <ActivityInfo />
      <ActivityButtons />
    </Box>
  );
};
