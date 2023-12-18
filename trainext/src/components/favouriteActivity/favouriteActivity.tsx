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
            width: { xs: '64px', sm: '96px' },
            height: { xs: '64px', sm: '96px' },
            marginBottom: '16px',
            borderColor: '#000000',
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {activity}
          </Typography>
        </Avatar>
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', md: '1rem' },
            height: { xs: '3rem' },
          }}
        >
          Fav Activity
        </Typography>
      </Box>
    </>
  );
};
