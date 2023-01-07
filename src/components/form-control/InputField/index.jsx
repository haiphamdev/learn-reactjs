import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
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
}

export default InputField;
