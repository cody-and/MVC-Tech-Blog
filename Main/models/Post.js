const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Post'
});

module.exports = Post;