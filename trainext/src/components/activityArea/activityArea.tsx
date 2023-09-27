import React, { FC, ReactElement } from 'react';

import { Grid, Box } from '@mui/material';
import { ActivityCounter } from '../activityCounter/activityCounter';

export const ActivityArea: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={7}
      px={4}
      sx={{ backgroundColor: '#E2E2E2' }}
    >
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
          mb={8}
          mt={8}
        >
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
          <Box>Activities Display Area</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
