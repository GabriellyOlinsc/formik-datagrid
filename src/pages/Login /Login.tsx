import { useEffect, useState } from "react";
import { TextInput } from "../../components";
import localInstance from "../../services/local-api";
import { setCredentials } from "../../store/modules/slice";
import { useDispatch } from "react-redux";
import { Box, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import AuthLayout from "../../components/authLayout";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const validate = (values: any) => {
  const errors: any = {}
  if (!values.login) {
    errors.login = 'Campo obrigatório'
  }

  if (!values.password) {
    errors.password = 'Campo obrigatório'
  }

  return errors
}

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const initialValues = {
    login: '',
    password: '',
    remember: false,
  }
  type Values = typeof initialValues

  const handleSubmit = async (values: Values) => {
    const user = 'user123';
    const token = 'sampletoken';
    const name = 'John Doe';
    const role = 'user';
    const email = "gaby@email.com"

    // Despachar ação para armazenar os dados de autenticação
    dispatch(setCredentials({ user, name, email, token, role }));
    navigate('/home')
  }

  // useEffect(() => {
  //   localInstance
  //     .post("ifleet", {
  //       login: "admin",
  //       password: "1nt3lbr4s"
  //     })
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((e) => console.log(e.respons));
  // }, []);

  return (
    <AuthLayout>
      <>
        <Box sx={{
          padding: '64px 80px',
          '@media (max-width: 1200px)': {
            padding: '32px 64px',
          },
          '@media (max-width: 900px)': {
            padding: '16px',
          },
        }}
        >
          <Typography style={{ paddingBottom: '30px', opacity: 0.75 }}>
            Acessa a plataforma de gestão de usuários!
          </Typography>
          <Box sx={{ display: 'block' }}>
            <Formik
              initialValues={initialValues}
              validate={(values) => validate(values)}
              onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextInput name="login" label="Username" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <TextInput name="password" label="Password" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.remember}
                        onChange={(_event, checked) => setFieldValue('remember', checked)}
                      />
                    }
                    label="Lembrar senha"
                    sx={{ display: 'block', m: '0px 0px 18px 0' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <button type="submit">
                    Login
                  </button>
                </Grid>
              </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </>
    </AuthLayout>
  )
}