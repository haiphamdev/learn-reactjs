import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password.'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    // reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  const inputRef = useRef(null);

  return (
    <div className="relative pt-8">
      {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: 1, left: 0, right: 0 }} />}
      <Avatar sx={{ m: '0 auto', bgcolor: (theme) => theme.palette.secondary.main }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h3" variant="h5" sx={{ textAlign: 'center', m: (theme) => theme.spacing(2, 0, 3, 0) }}>
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
        <InputField ref={inputRef} name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ m: (theme) => theme.spacing(2, 0, 3) }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
