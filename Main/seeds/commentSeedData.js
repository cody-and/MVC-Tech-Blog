const { Comment } = require('../models');

const generateCommentData = (count) => {
  const commentData = [];

  for (let i = 1; i <= count; i++) {
    commentData.push({
      commentContent: `This is comment ${i}`,
      userId: i, 
      postId: i, 
    });
  }

  return commentData;
};

const seedComments = async () => {
  try {
    const commentCount = 15; 
    const commentData = generateCommentData(commentCount);

    await Comment.bulkCreate(commentData);

    console.log(`Generated and seeded ${commentCount} comments successfully.`);
  } catch (err) {
    console.error('Error seeding comments:', err);
  }
};

module.exports = seedComments;
