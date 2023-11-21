import React, { FC, ReactElement } from 'react';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IActivityButtons } from './interfaces/IActivityButtons';
import PropTypes from 'prop-types';
import { Status } from '../createActivityForm/enums/Status';

export const ActivityButtons: FC<IActivityButtons> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      m={1}
    >
      <FormControlLabel
        label={
          <Typography fontSize="0.7rem">Started</Typography>
        }
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.started}
          />
        }
      ></FormControlLabel>
      <Box
        display="flex"
        justifyContent="space-between"
        width="40%"
        textAlign="center"
      >
        <Typography
          variant="h6"
          fontSize="0.7rem"
          margin="auto"
        >
          Mark as completed
        </Typography>
        <IconButton onClick={(e) => onClick(e, id)}>
          <HighlightOffIcon sx={{ width: '1.2rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

ActivityButtons.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};
