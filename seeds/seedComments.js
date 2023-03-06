const { Comment } = require("../models");

const comments = [
  {
    comment: 'I love javascript almost as much as I love coffee.',
    user_id: 2,
    post_id: 1,
  },
  {
    comment: 'Javascript is a great first language to learn!',
    user_id: 3,
    post_id: 1,
  },
  {
    comment: 'JS is sophisticated because it is so classy :P',
    user_id: 1,
    post_id: 1,
  },
  {
    comment: 'CSS is more fun for styling webpages than Javascript, change my mind!',
    user_id: 5,
    post_id: 1,
  },
  {
    comment: `You're crazy, JS is way more dynamic!! PLUS, more frameworks than you can count!!! NO QUESTION!`,
    user_id: 2,
    post_id: 1,
  },
  {
    comment: 'Have you guys seen all these concept games being demonstrated on Unreal Engine 5? The graphics are... like... hyper real.',
    user_id: 5,
    post_id: 1,
  },
  {
    comment: `Imagine when VR games start coming out using UE5? I think I'd quit gaming before we all get sucked into the Matrix or something.`,
    user_id: 4,
    post_id: 1,
  },
  {
    comment: `Hahaha I know right.. you put on the VR headset and hear a voice... you are the one Neo.`,
    user_id: 1,
    post_id: 1,
  },
  {
    comment: 'C++ always seemed like the OG to me.',
    user_id: 2,
    post_id: 2,
  },
  {
    comment: `It's been around forever. Definitely worth learning.`,
    user_id: 3,
    post_id: 2,
  },
  {
    comment: `Start with the tough stuff, and everything else seems easy!`,
    user_id: 4,
    post_id: 3,
  },
  {
    comment: `It's not THAT hard to learn.`,
    user_id: 2,
    post_id: 4,
  },
  {
    comment: `I was up until 5am trying to print a message to the screen. HELP!`,
    user_id: 1,
    post_id: 4,
  },
  {
    comment: `#include <iostream>
    std::cout << someString << "\n";
    or
    
    printf("%s\n",someString.c_str());`,
    user_id: 2,
    post_id: 4,
  },
  {
    comment: `This is the hands down most efficient programming language I've ever used.`,
    user_id: 2,
    post_id: 3,
  },
  {
    comment: 'Really? Moreso than Python?',
    user_id: 4,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(comments, { individualHooks: true, returning: true });

module.exports = seedComments;