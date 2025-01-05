import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };
 
    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Container maxWidth="xs" sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" >
            Login
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
    
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={login}
          >
            Log In
          </Button>
    
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Not Registered? 
              <Link to="/register" >
                <Button color="primary" sx={{ padding: 0 }}>
                  Sign Up!
                </Button>
              </Link>
            </Typography>
          </Box>
        </Container>
      );
    };

export default LoginPage;