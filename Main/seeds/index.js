const sequelize = require('../config/config');
const seedUsers = require('./userSeedData');
const seedPosts = require('./postSeedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();