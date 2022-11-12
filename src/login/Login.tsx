import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useAuth } from "../contexts/auth-context";
import AlertError from '../mui/AlertError';
import CenteredBox from '../mui/CenteredBox';
import CenteredGrid from '../mui/CenteredGrid';
import CustomLoadingButton from '../mui/CustomLoadingButton';
import { sendDataToAPI } from '../utils/api';
import { loginStyle } from '../utils/login-styles';
import { LoginReqDto, LoginResDto } from './interface/auth.dto';

export default function Login() {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const validationSchema = yup.object({
    username: yup.string().required('The username is required'),
    password: yup.string().required('The password is required'),
  });
  const initialValues: LoginReqDto = {
    username: '',
    password: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: LoginReqDto) => {
      sendDataToAPI<LoginReqDto, LoginResDto>('auth/login', values).then((resp) => {
        login(resp);
      }
      ).catch(error => {
        setError(error.message)
      });
    },
  });

  return (
    <CenteredGrid>
      {error && <AlertError>{error}</AlertError>}
      <form style={loginStyle} onSubmit={formik.handleSubmit}>
        <CenteredBox>
          <AccountBoxIcon
            sx={{ width: '50px', height: '50px', color: 'grey' }}
          />
        </CenteredBox>
        <CenteredBox>
          <TextField
            fullWidth
            size="small"
            id="username"
            name="username"
            label="Usuario"
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            size="small"
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </CenteredBox>
        <CenteredBox>
          <CustomLoadingButton>Ingresar</CustomLoadingButton>
        </CenteredBox>
      </form>
    </CenteredGrid>
  );
}
