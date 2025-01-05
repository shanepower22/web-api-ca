import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
const SignUpPage = () => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }
  

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Container maxWidth="xs" sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" >
        Sign Up
      </Typography>
      <Typography variant="body1" paragraph>
        You must register a username and password to log in.
      </Typography>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={passwordAgain}
        onChange={(e) => setPasswordAgain(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={register}
      >
        Register
      </Button>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Already a user?
          <Link to="/login" >
            <Button color="primary" sx={{ padding: 0 }}>
              Log in
            </Button>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpPage;
