import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

export const ActivitySelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;
  return (
    <Box
      position="relative"
      className="select-activity"
      sx={{
        width: { xs: '85%', sm: '50%' },
        margin: {
          xs: '0 10% !important',
          sm: '0 !important',
        },
      }}
    >
      <FormControl
        size="small"
        fullWidth
        sx={{
          '&::after': {
            content: '""',
            backgroundColor: '#E2E2E2',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: '1',
            opacity: '0.65',
          },
          position: 'relative',
          width: { xs: '80%', sm: '80%' },
          margin: '0 5% 0 1.2em',
          alignSelf: { xs: 'center' },
          height: '2.8rem',
          zIndex: '2',
        }}
      >
        <InputLabel
          id={`${name}-id`}
          className="selectInput"
          sx={{
            zIndex: '2',
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId={`${name}-id`}
          id={`${name}-id-select`}
          value={value}
          label={label}
          name={name}
          onChange={onChange}
          disabled={disabled}
          sx={{ zIndex: 2, height: '100%' }}
        >
          {items.map((item, index) => (
            <MenuItem
              key={item.value + index}
              value={item.value}
              sx={{
                backgroundColor: '#E2E2E2',
                zIndex: '3',
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

// items will be array of objects (defined shape of objects)
ActivitySelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
