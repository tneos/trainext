import React, { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={7}
      px={4}
      sx={{ backgroundColor: '#E2E2E2' }}
    >
      <h2>Content Area</h2>
    </Grid>
  );
};
