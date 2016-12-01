const userRouter = require('express').Router();

const {
  getPassword,
  createUser
}       = require('../models/user.js')


userRouter.route('/login')
  .post(getPassword, (req, res) => res.json(res.data))

userRouter.route('/signup')
  .post(createUser, (req, res) => res.json({message: 'signed up'}));

  module.exports = userRouter;

