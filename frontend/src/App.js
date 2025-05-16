import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPanel from './pages/AdminPanel';
import BookListView from './pages/BookListView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/books" element={<BookListView />} />
      </Routes>
    </Router>
  );
}

export default App;
