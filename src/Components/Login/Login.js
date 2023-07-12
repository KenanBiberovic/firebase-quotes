import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle submit logic here
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box width="400px">
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box mb={2} display="flex" alignItems="center">
              <EmailIcon sx={{ marginRight: "8px" }} />
              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                autoComplete="off"
                error={Boolean(ErrorMessage)}
                helperText={<ErrorMessage name="email" component="div" />}
              />
            </Box>
            <Box mb={2} display="flex" alignItems="center">
              <LockIcon sx={{ marginRight: "8px" }} />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                autoComplete="off"
                error={Boolean(ErrorMessage)}
                helperText={<ErrorMessage name="password" component="div" />}
              />
            </Box>
            <Box textAlign="center">
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
