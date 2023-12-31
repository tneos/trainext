import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';

export const Profile: FC<IProfile> = (
  props,
): ReactElement => {
  // Destructure props
  const { name = 'Thomas' } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        '&::before': {
          content: '""',
          backgroundColor: '#E2E2E2',
          position: 'absolute',
          width: '100%',
          height: '25vh',
          top: '0',
          left: '0',
          zIndex: '1',
          opacity: '0.65',
          ['@media (min-height:800px)']: { height: '20vh' },
          ['@media (max-height:600px)']: { height: '40vh' },
        },

        position: 'relative',
        width: '80%',
        height: '25vh',
        top: '5%',
        left: '10%',
        ['@media (min-height:800px)']: { height: '20vh' },
        ['@media (max-height:600px)']: { height: '40vh' },
      }}
    >
      <FaceTwoToneIcon
        fontSize="large"
        sx={{
          zIndex: '2',
          width: '0.7em',
          height: '0.7em',
        }}
      />
      <Typography
        variant="h5"
        color="#000000"
        sx={{
          fontWeight: 'light',
          fontSize: '1.2rem',
          letterSpacing: '1px',
          zIndex: '2',
        }}
      >
        {`Welcome ${name}`}
      </Typography>
      <Typography
        paragraph={true}
        sx={{
          fontWeight: 'light',
          mb: '0',
          zIndex: '2',
          fontSize: '0.8rem',
        }}
      >
        Your personal fitness log
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};
