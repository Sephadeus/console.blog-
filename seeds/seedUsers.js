const { User } = require("../models");

const users = [
  {
    id: 0,
    name: "TheMaster",
    email: "master@gmail.com",
    password: "secret1000",
  },
  {
    id: 1,
    name: "FreshSammon",
    email: "salmanphresh@gmail.com",
    password: "secret2000",
  },
  {
    id: 2,
    name: "Andre3000",
    email: "andre3000@gmail.com",
    password: "secret3000",
  },
  {
    id: 3,
    name: "JimiHendz",
    email: "shreddermon@gmail.com",
    password: "secret4000",
  },
  {
    id: 5,
    name: "SteVai",
    email: "tenderlysurrendering@gmail.com",
    password: "secret5000",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;