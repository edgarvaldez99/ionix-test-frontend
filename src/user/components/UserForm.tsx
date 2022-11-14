import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useAlertContext } from "../../contexts/alert-context";
import { APIError } from "../../interface/error";
import { FormProps } from "../../interface/form-props";
import AlertError from "../../mui/AlertError";
import CustomLoadingButton from "../../mui/CustomLoadingButton";
import { sendDataToAPI } from "../../utils/api";
import useUserByIdState from "../hooks/user-by-id";
import { UserCreateDto } from "../interface/user";

export default function UserForm({ id, onClose, onSubmit }: FormProps) {
  const [apiError, setApiError] = useState("");
  const { setAlertMessage } = useAlertContext();
  const { loading, data, error } = useUserByIdState(id);
  const isCreate = !id;
  const validationSchema = yup.object({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().optional().email("Invalid email format"),
    username: yup.string().required("Username is required"),
    password: isCreate
      ? yup.string().required("Password is required")
      : yup.string(),
  });
  const initialValues: UserCreateDto = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: UserCreateDto) => {
      let apiPromise;
      if (id) {
        apiPromise = sendDataToAPI(`users/${id}`, values, "PUT");
      } else {
        apiPromise = sendDataToAPI(`users`, values);
      }
      apiPromise
        .then(() => {
          setAlertMessage(`User ${isCreate ? "created" : "updated"}`);
          onSubmit();
        })
        .catch((error: APIError) => {
          const err = Array.isArray(error.message)
            ? error.message.join(", ")
            : error.message;
          setApiError(err);
        });
    },
  });
  useEffect(() => {
    if (data) {
      formik.setValues({ ...data, password: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Grid>
      {loading && <CircularProgress />}
      {apiError && <AlertError>{apiError}</AlertError>}
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <CustomLoadingButton>Submit</CustomLoadingButton>
          <Button
            type="button"
            sx={{
              textTransform: "none",
              marginTop: "20px",
              marginLeft: "20px",
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Grid>
  );
}
