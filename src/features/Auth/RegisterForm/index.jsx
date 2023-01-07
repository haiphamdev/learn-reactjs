import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test(
        'should has at least two words',
        'Please enter at least two words.',
        (value) => value.split(' ').length >= 2
      ),
    email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password.').min(6, 'Please enter at least 6 characters.'),
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password does not match.'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
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

  return (
    <div className="pt-8">
      <Avatar sx={{ m: '0 auto', bgcolor: (theme) => theme.palette.secondary.main }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h3" variant="h5" sx={{ textAlign: 'center', m: (theme) => theme.spacing(2, 0, 3, 0) }}>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="off">
        <InputField name="fullName" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ m: (theme) => theme.spacing(2, 0, 3) }}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
