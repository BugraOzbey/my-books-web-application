import React from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm'; // Eklediysen

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Paneli</h2>
      <BookForm />
      <BookList editable />
    </div>
  );
};

export default AdminPanel;
