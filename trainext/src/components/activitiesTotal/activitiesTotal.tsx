import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { IActivitiesTotal } from './IActivitiesTotal';

export const ActivitiesTotal: FC<IActivitiesTotal> = (
  props,
): ReactElement => {
  // Destructure props
  const { total = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            color: '#000000',
            border: '3px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: '#000000',
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: '1.4rem' }}
          >
            {total}
          </Typography>
        </Avatar>
        <Typography>Activities</Typography>
      </Box>
    </>
  );
};
