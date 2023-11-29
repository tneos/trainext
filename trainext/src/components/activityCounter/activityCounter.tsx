import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { IActivityCounter } from './interfaces/IActivityCounter';
import { Status } from '../createActivityForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

export const ActivityCounter: FC<IActivityCounter> = (
  props,
): ReactElement => {
  // Destructure props
  const { status = Status.planned, count = 0 } = props;
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
            border: '5px solid',
            width: { xs: '82px', sm: '96px' },
            height: { xs: '82px', sm: '96px' },
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(
              status,
            )}`,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: '1.4rem' }}
          >
            {count}
          </Typography>
        </Avatar>
        <Typography
          fontWeight="bold"
          fontSize="1rem"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

ActivityCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.planned,
    Status.started,
    Status.completed,
  ]),
};
