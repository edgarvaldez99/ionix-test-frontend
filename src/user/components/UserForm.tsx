import { Box, CircularProgress, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useRefreshContext } from '../../contexts/refresh-context';
import { FormProps } from '../../interface/form-props';
import AlertError from '../../mui/AlertError';
import CenteredBox from '../../mui/CenteredBox';
import CustomLoadingButton from '../../mui/CustomLoadingButton';
import { sendDataToAPI } from '../../utils/api';
import useUserByIdState from '../hooks/user-by-id';
import { UserCreateDto } from '../interface/user';

export default function UserForm(props: FormProps) {
  const navigate = useNavigate();
  const {setOpenAlert, setUpdated, setAbmAlert} = useRefreshContext();
  const id = props.id;
  const isCreate = !id;
  const { loading, data, error } = useUserByIdState(id);
  const validationSchema = yup.object({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
    email: yup.string().email('Invalid email format'),
    username: yup.string().required('Username is required'),
    password: isCreate ? yup.string().required('Password is required') : yup.string(),
  });
  const initialValues: UserCreateDto = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: UserCreateDto) => {
      let apiPromise;
      if (id) {
        apiPromise = sendDataToAPI(`users/${id}`, values, 'PUT');
      } else {
        apiPromise = sendDataToAPI(`users`, values);
      }
      apiPromise.then(()=> {
        navigate('/users');
        setUpdated(true);
        setOpenAlert(true);
        setAbmAlert('User updated deleted');
      })
      props.onSubmit();
    },
  });
  useEffect(() => {
    if (data) {
      formik.setValues({ ...data, password: '' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Grid>
      {loading && <CircularProgress />}
      {error && (
        <AlertError>User with Id: {id} does not exist on database</AlertError>
      )}
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <TextField
            fullWidth
            id="firstname"
            name="firstname"
            label="Firstname"
            margin='normal'
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            fullWidth
            id="lastname"
            name="lastname"
            label="Lastname"
            margin='normal'
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin='normal'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            margin='normal'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            margin='normal'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
        <CenteredBox>
          <CustomLoadingButton>
            Submit
          </CustomLoadingButton>
        </CenteredBox>
      </form>
    </Grid>
  );
}
