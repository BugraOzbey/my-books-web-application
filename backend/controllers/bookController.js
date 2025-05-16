const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Kitaplar getirilemedi', error: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Kitap eklenemedi', error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Kitap bulunamadı' });

    await book.update(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Kitap güncellenemedi', error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Kitap bulunamadı' });

    res.json({ message: 'Kitap silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Kitap silinemedi', error: error.message });
  }
};
