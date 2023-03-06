const { User } = require("../models");

const users = [
  {
    id: 4,
    username: "TheMaster",
    // email: "master@gmail.com",
    password: "secret1000",
  },
  {
    id: 1,
    username: "FreshSammon",
    // email: "salmanphresh@gmail.com",
    password: "secret2000",
  },
  {
    id: 2,
    username: "Andre3000",
    // email: "andre3000@gmail.com",
    password: "secret3000",
  },
  {
    id: 3,
    username: "JimiHendz",
    // email: "shreddermon@gmail.com",
    password: "secret4000",
  },
  {
    id: 5,
    username: "SteVai",
    // email: "tenderlysurrendering@gmail.com",
    password: "secret5000",
  },
];

const seedUsers = () => User.bulkCreate(users, { individualHooks: true, returning: true });

module.exports = seedUsers;