const sequelize = require('../config/connection');
const { seedUsers, seedPosts, seedComments } = require('../seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
    console.log('Users Seeded');

  await seedPosts();
  console.log('Posts Seeded');

  await seedComments();
  console.log('Comments Seeded');

console.log('DATABASE SEEDED SUCCESSFULLY')
  process.exit(0);
};

seedDatabase();
