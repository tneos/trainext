import React, { FC, ReactElement } from 'react';
import { Link } from '@mui/material';

export const ActivityButton: FC = (): ReactElement => {
  return (
    <Link
      component="button"
      sx={{
        backgroundColor: '#4B9D54',
        textDecoration: 'none',
        width: '20vw',
        height: '2.5rem',
        borderRadius: '5px',
        letterSpacing: '2px',
      }}
    >
      ADD TO LIST
    </Link>
  );
};
