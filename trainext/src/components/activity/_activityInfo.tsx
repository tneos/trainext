import React, { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';

import { IActivityInfo } from './interfaces/IActivityInfo';

import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Activity } from '../createActivityForm/enums/Activity';

export const ActivityInfo: FC<IActivityInfo> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    title = Activity.cycling,
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
            fontSize="0.8rem"
            lineHeight="2rem"
            ml={0.5}
            sx={{ verticalAlign: 'middle' }}
          >
            {duration}
            {title}
          </Typography>
        </Box>
        <Box>
          <Chip
            variant="outlined"
            label={format(date, 'PPP')}
            sx={{
              fontSize: '0.7rem',
            }}
          ></Chip>
        </Box>
      </Box>
    </>
  );
};

ActivityInfo.propTypes = {
  title: PropTypes.oneOf([
    Activity.cycling,
    Activity.rowing,
    Activity.running,
    Activity.swimming,
    Activity.walking,
  ]),
  duration: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
