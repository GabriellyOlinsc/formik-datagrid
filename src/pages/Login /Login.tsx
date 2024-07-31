import { TextInput } from "../../components";
import { setCredentials } from "../../store/modules/auth/slice";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import AuthLayout from "../../components/authLayout";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/modules/auth/service";
import { parseJwt } from "../../utils";

const validate = (values: any) => {
  const errors: any = {};
  if (!values.login) {
    errors.login = "Campo obrigatório";
  }

  if (!values.password) {
    errors.password = "Campo obrigatório";
  }

  return errors;
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation()
  const initialValues = {
    login: "",
    password: "",
    remember: false,
  };
  type Values = typeof initialValues;

  const handleSubmit = async (values: Values) => {
    try{
      const request = await login({login: values.login, password: values.password}).unwrap()
      const userInfo = parseJwt(request.data)
    }catch(err){
      console.log(err)
    }

    //navigate("/home");
  };

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "64px 80px",
            "@media (max-width: 1200px)": {
              padding: "32px 64px",
            },
            "@media (max-width: 900px)": {
              padding: "16px",
            },
          }}
        >
          <Typography variant="h3" sx={{ pb: "20px" }}>
            Userly System
          </Typography>

          <Typography style={{ paddingBottom: "40px", opacity: 0.75 }}>
            Acessa a plataforma de gestão de usuários!
          </Typography>
          <Box sx={{ display: "block" }}>
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
                      <TextInput
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={values.remember}
                            onChange={(_event, checked) =>
                              setFieldValue("remember", checked)
                            }
                          />
                        }
                        label="Lembrar senha"
                        sx={{ display: "block", marginBottom: "18px" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          variant="outlined"
                          sx={{ width: "280px", mb: 0, maxWidth: "100%" }}
                          type="submit"
                        >
                          Login
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </>
    </AuthLayout>
  );
}
