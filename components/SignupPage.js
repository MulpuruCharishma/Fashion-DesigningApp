// import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation on successful signup
import axios from "axios";
function Signup() {
  const navigate = useNavigate(); // For navigation after signup

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const name = data.get("name")
    const email = data.get("email")
    const password = data.get("password")
    axios.post("http://localhost:8080/signup",{
      name,email,password
    })
    .then((res)=>{
      if(res.data.message === "user already exist"){
        alert("User already exist")
        navigate("/login")
      }
      else{
        alert("User created succesfully")
        navigate("/login")

      }
    })




    // event.preventDefault(); // Prevent default form submission

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match. Please try again.');
    //   return;
    // }

    // if (!agreeTerms) {
    //   alert('Please agree to the terms and conditions.');
    //   return;
    // }
    // if (!email.includes('@gmail.com')) {
    //   alert('Please enter a valid email address');
    //   return;
    // }
  
    // // Check if the password meets the complexity requirements
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   alert('Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long');
    //   return;
    // }
  


    // alert('Signup successful!'); // Placeholder for successful signup notification
    // window.location.href = '/login';
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Name"
            name="name"
            autoComplete="given-name"
            
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
          
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            
            
          />
           <Typography variant="body2" color="textSecondary">
            Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long.
          </Typography>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
