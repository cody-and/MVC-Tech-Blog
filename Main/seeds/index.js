const sequelize = require('../config/connection');
const seedUsers = require('./userSeedData');
const seedPosts = require('./postSeedData');
const seedComments = require('./commentSeedData'); 

const seedAll = async () => {
  await sequelize.sync({ force: false }); 

  await seedUsers();
  await seedPosts();
  await seedComments ();
  

  process.exit(0);
};

seedAll();
