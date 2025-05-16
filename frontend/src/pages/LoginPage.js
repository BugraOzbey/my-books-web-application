import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else if (username === 'user' && password === 'user') {
      navigate('/books');
    } else {
      alert('Geçersiz giriş bilgileri');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 10, p: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>Giriş Yap</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          margin="normal"
          label="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Giriş Yap
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
