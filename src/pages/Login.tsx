import React, { useState, FC, ReactElement, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { LoginURL } from "../helper/app-helper";
import { useNavigate, Link as NavLink } from "react-router-dom";
import { darkTheme, lightTheme } from "../assets/theme/theme";
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";
import Confetti from "react-confetti";
import useWindowSize from "../hooks/useWindowSize";
import { useAppSelector, useAppDispatch } from "../app/hooks/hooks";
import {
  toggleConfettiOn,
  toggleConfettiOff,
} from "../features/confetti/confettiSlice";

const Copyright = (props: any) => {
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
};

const Login: FC = (): ReactElement => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<any>(lightTheme);
  const { width, height } = useWindowSize();
  const confetti = useAppSelector((state) => state.confetti);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  type CreateLoginResponse = {
    token: string;
    userId: string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      setIsLoading(true);
      const response = await axios.post<CreateLoginResponse>(LoginURL, payload);
      let token: string = response.data.token;
      let userId: string = response.data.userId;
      localStorage.setItem("Token", token);
      localStorage.setItem("userId", userId);
      dispatch(toggleConfettiOff());
      notifySuccess();
      return navigate(`/`);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        setEmail(``);
        setPassword(``);
        if (error.message === "Request failed with status code 404") {
          return notify404();
        } else if (error.message === "Request failed with status code 401") {
          return notify401();
        }
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

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleConfettiOff());
    }, 5000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <IconButton
            onClick={() => {
              setTheme(lightTheme);
            }}
          >
            <WbSunnyIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setTheme(darkTheme);
            }}
          >
            <NightlightIcon />
          </IconButton>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={handleEmailChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
              />
              <TextField
                onChange={handlePasswordChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {isLoading && <LinearProgress />}
              <Grid container>
                <Grid item>
                  <Link variant="body2">
                    <NavLink to="/signup">
                      {"Don't have an account? Sign Up"}
                    </NavLink>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        {confetti.isActive && <Confetti width={width} height={height} />}
      </Grid>
    </ThemeProvider>
  );
};
export default Login;

const notify404 = () =>
  toast.error("Email not registered", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notify401 = () =>
  toast.error("Wrong Email or Password", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const notifySuccess = () =>
  toast.success("Logged in", {
    position: "bottom-left",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
