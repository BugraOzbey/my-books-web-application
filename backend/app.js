const bookRoutes = require('./routes/bookRoutes');
const express = require('express');
const cors = require('cors');
const Book = require('./models/Book');
require('dotenv').config();

const sequelize = require('./config/database');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.send('MyBook Backend Çalışıyor');
});

app.use('/api/books', bookRoutes);


// Sequelize ile DB'ye bağlan
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Veritabanı bağlantısı başarılı');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
  })
  .catch(err => {
    console.error('Veritabanına bağlanılamadı:', err);
  });
