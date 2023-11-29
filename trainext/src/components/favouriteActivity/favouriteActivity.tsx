import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { IFavouriteActivity } from './IFavouriteActivity';

export const FavouriteActivity: FC<IFavouriteActivity> = (
  props,
): ReactElement => {
  // Destructure props
  const { activity = 'running' } = props;
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
            sx={{ fontSize: '1rem' }}
          >
            {activity}
          </Typography>
        </Avatar>
        <Typography>Favourite activity</Typography>
      </Box>
    </>
  );
};
