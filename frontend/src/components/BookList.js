import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BookList = ({ editable = false }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books');
      setBooks(res.data);
    } catch (err) {
      console.error('Kitaplar getirilemedi', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (err) {
      console.error('Silme işlemi başarısız', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <List>
      {books.map((book) => (
        <ListItem
          key={book.id}
          secondaryAction={
            editable && (
              <IconButton edge="end" onClick={() => handleDelete(book.id)}>
                <DeleteIcon />
              </IconButton>
            )
          }
        >
          <ListItemText
            primary={book.title}
            secondary={`Yazar: ${book.author}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
