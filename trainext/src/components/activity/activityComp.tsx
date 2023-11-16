import React, { FC, ReactElement } from 'react';
import { IActivityComp } from './interfaces/IActivityComp';
import { Status } from '../createActivityForm/enums/Status';
import { Activity } from '../createActivityForm/enums/Activity';

import { Box } from '@mui/material';
import { ActivityInfo } from './_activityInfo';
import { ActivityButtons } from './_activityButtons';
import { renderStatusBorderColor } from './helpers/renderStatusBorderColor';
import PropTypes from 'prop-types';

export const ActivityComp: FC<IActivityComp> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    title = Activity.running,
    duration = '60 min ',
    date = new Date(),
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    status = Status.completed,
  } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderStatusBorderColor(status),
      }}
    >
      <ActivityInfo
        duration={duration}
        title={title}
        date={date}
      />
      <ActivityButtons
        onStatusChange={onStatusChange}
        onClick={onClick}
      />
    </Box>
  );
};

ActivityComp.propTypes = {
  title: PropTypes.oneOf([
    Activity.cycling,
    Activity.rowing,
    Activity.running,
    Activity.swimming,
    Activity.walking,
  ]),
  duration: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string,
  status: PropTypes.string,
};
