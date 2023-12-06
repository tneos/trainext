import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import Image from '../../images/traiNext-logos_transparent.png';

export const Logo: FC = (): ReactElement => {
  return (
    <>
      <Box
        width="50%"
        height="20vh"
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '50%',
          ['@media (max-height:600px)']: { height: '40vh' },
        }}
      ></Box>
    </>
  );
};
