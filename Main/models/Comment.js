const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comment'
});

module.exports = Comment;