const { User } = require('../models');

const generateUserData = (count) => {
  const userData = [];

  for (let i = 1; i <= count; i++) {
    userData.push({
      username: `User${i}`,
      password: 'password',
    });
  }

  return userData;
};

const seedUsers = async () => {
  try {
    const userCount = 25; 
    const userData = generateUserData(userCount);

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    console.log(`Generated and seeded ${userCount} users successfully:`);
    users.forEach((user, index) => {
      console.log(`${index + 1}. Username: ${user.username}`);
    });
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

module.exports = seedUsers;
