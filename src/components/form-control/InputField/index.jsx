import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';

const InputField = React.forwardRef((props, ref) => {
  const { form, name, label, disabled } = props;

  useEffect(() => {
    ref?.current?.querySelector('input')?.focus();
  }, [ref]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          ref={ref}
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
        />
      )}
    />
  );
});

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
