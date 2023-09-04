const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};