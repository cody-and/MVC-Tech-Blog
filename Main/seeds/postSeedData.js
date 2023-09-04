const { Post } = require('../models');

const generatePostData = (count) => {
  const postData = [];

  for (let i = 1; i <= count; i++) {
    postData.push({
      postTitle: `Post ${i}`,
      postContent: `This is the content of Post ${i}`,
      userId: i,
    });
  }

  return postData;
};

const seedPosts = async () => {
  try {
    const postCount = 40; 
    const postData = generatePostData(postCount);

    await Post.bulkCreate(postData);

    console.log(`Generated and seeded ${postCount} posts successfully.`);
  } catch (err) {
    console.error('Error seeding posts:', err);
  }
};

module.exports = seedPosts;
