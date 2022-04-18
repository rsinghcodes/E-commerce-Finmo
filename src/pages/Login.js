import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

// react router
import { Link } from 'react-router-dom';

export default function Login() {
  // Form validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {},
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign-in
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disableElevation
                sx={{ mt: 3, mb: 2, textTransform: 'none' }}
              >
                Log In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/register" variant="body2">
                    Don't have an account? Register Here
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Form>
        </FormikProvider>
      </Box>
    </Container>
  );
}
