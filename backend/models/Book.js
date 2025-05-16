const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pageCount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('reading', 'completed', 'plan'),
    defaultValue: 'plan'
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Book;
