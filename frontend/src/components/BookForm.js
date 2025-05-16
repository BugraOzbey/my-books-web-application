import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const BookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // rating ve year sayısal değer olarak gönderilsin
    const newBook = {
      title,
      author,
      year: year ? parseInt(year) : null,
      pageCount: pageCount ? parseInt(pageCount) : null,
      rating: rating ? parseInt(rating) : null,
    };

    try {
      await axios.post('http://localhost:5000/api/books', newBook);
      setTitle('');
      setAuthor('');
      setYear('');
      setPageCount('');
      setRating('');
      onBookAdded();
    } catch (err) {
      console.error('Kitap eklenemedi', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Kitap Başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Yazar"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Yayın Yılı"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Sayfa Sayısı"
        value={pageCount}
        onChange={(e) => setPageCount(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="number"
        inputProps={{ min: 1, max: 5 }}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Kitap Ekle
      </Button>
    </Box>
  );
};

export default BookForm;
