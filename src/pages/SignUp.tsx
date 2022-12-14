import React, { FC, useState, ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MERN
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const SignUp: FC = (): ReactElement => {
  const [Email, setEmail] = useState<string | null>(null);
  const [Password, setPassword] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);

  const navigate = useNavigate();

  type CreateResponse = {
    Success: string;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      name: Name,
      email: Email,
      password: Password,
    };

    try {
      //input error
      if (!Email?.includes("@") || Password?.length < 13) {
        return setInputError(true);
      }
      setIsLoading(true);
      await axios.put<CreateResponse>(`signup`, payload);
      notifySignedUp();
      navigate(`/login`);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setName("");
        return toast.error(error.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    setIsLoading(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                color={inputError ? "warning" : "primary"}
                variant="standard"
                required
                fullWidth
                name="name"
                focused
                label="Name"
                id="name"
                onChange={handleNameChange}
                value={Name || ""}
                helperText={
                  inputError
                    ? "Email must be real & Password at least 13 characters"
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color={inputError ? "warning" : "primary"}
                variant="standard"
                required
                focused
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
                value={Email || ""}
                helperText={
                  inputError
                    ? "Email must be real & Password at least 13 characters"
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color={inputError ? "warning" : "primary"}
                variant="standard"
                required
                fullWidth
                name="password"
                focused
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handlePasswordChange}
                value={Password || ""}
                helperText={
                  inputError
                    ? "Email must be real & Password at least 13 characters"
                    : null
                }
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {isLoading && <LinearProgress />}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2">
                <NavLink to="/login">Already have an account? Sign in</NavLink>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUp;

const notifySignedUp = () =>
  toast.success("Sign in to get started", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
