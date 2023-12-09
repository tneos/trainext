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
          <Typography
            sx={{
              fontSize: { xs: '0.6rem', md: '0.7rem' },
            }}
          >
            Started
          </Typography>
        }
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            color="warning"
            defaultChecked={status === Status.started}
            size="small"
          />
        }
      ></FormControlLabel>
      <Box
        display="flex"
        justifyContent="space-between"
        textAlign="center"
        sx={{
          width: {
            xs: '54%',
            sm: '42%',
            md: '50%',
            lg: '39%',
          },
          ['@media (min-width:700px)']: {
            width: '30%',
          },

          ['@media (min-width:1000px)']: {
            width: '44%',
          },
        }}
      >
        <Typography
          variant="h6"
          margin="auto"
          sx={{
            fontSize: { xs: '0.6rem', md: '0.7rem' },
          }}
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
