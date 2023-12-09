import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';

import { IActivityInfo } from './interfaces/IActivityInfo';

import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const ActivityInfo: FC<IActivityInfo> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    title = 'Walking',
    duration = '25min ',
    date = new Date(),
  } = props;

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        m={1}
      >
        <Box>
          <Typography
            variant="h6"
            lineHeight="2rem"
            ml={0.5}
            sx={{
              verticalAlign: 'middle',
              fontSize: { xs: '0.6rem', md: '0.8rem' },
              lineHeight: { xs: '1.6rem' },
            }}
          >
            {duration} {title}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '57%', sm: '38%' },
          }}
        >
          <Chip
            variant="outlined"
            label={format(date, 'PPP')}
            sx={{
              fontSize: { xs: '0.6rem', md: '0.7rem' },
              height: { xs: '1.5rem' },
              lineHeight: { xs: '1.8' },
              width: '100%',
            }}
          ></Chip>
        </Box>
      </Box>
    </>
  );
};

ActivityInfo.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
