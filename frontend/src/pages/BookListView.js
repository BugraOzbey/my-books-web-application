import React from 'react';
import BookList from '../components/BookList';

const BookListView = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Kitaplar</h2>
      <BookList />
    </div>
  );
};

export default BookListView;
