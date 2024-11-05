import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  // Clear errors when input is valid
  useEffect(() => {
    if (name) {
      setErrors(prevErrors => ({ ...prevErrors, name: '' }));
    }
  }, [name]);

  useEffect(() => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }
  }, [email]);

  useEffect(() => {
    if (age && !isNaN(age)) {
      setErrors(prevErrors => ({ ...prevErrors, age: '' }));
    }
  }, [age]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!name) newErrors.name = "Name required!";

    // Email validation
    if (!email) newErrors.email = "Email required!";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email required!";

    // Age validation
    if (!age) newErrors.age = "Age required!";
    else if (isNaN(age)) newErrors.age = "Age number honi chahiye!";

    // If no errors, show success message
    if (Object.keys(newErrors).length === 0) {
      alert("Form successfully submitted!");
      setName(""); // Clear the fields after submission
      setEmail("");
      setAge("");
    } else {
      setErrors(newErrors); // Show errors
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: '#f0f4f8',
        fontFamily: "'Roboto', sans-serif",
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#fff',
          maxWidth: '400px',
          width: '100%',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: 'center',
            color: '#3f51b5',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          Addmission Form 
        </Typography>

        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#3f51b5',
              },
              '&:hover fieldset': {
                borderColor: '#3f51b5',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
              },
            },
          }}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#3f51b5',
              },
              '&:hover fieldset': {
                borderColor: '#3f51b5',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
              },
            },
          }}
        />

        {/* Age Field */}
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={!!errors.age}
          helperText={errors.age}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#3f51b5',
              },
              '&:hover fieldset': {
                borderColor: '#3f51b5',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
              },
            },
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: '20px',
            padding: '12px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#2c387e',
            },
          }}
        >
          Submit
        </Button>  
        
          
      </form>



    </Box>
  );
};

export default FormComponent;
