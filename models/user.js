const db      =  require('../db/db.js');
const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

const SALTROUNDS = 10;


function getPassword(req, res, next) {
    console.log(req.body)
  db.one(`SELECT * FROM demousers WHERE demousers.username = $/username/;`, req.body)
    .then((data) => {
        console.log('data', Array.isArray(data))
       if (bcrypt.compareSync(req.body.password, data.password)) {
          console.log ('match!')
          const myToken = jwt.sign({ username: req.body.username}, 'our secret');
          res.status(200).json(myToken);
       } else {
          console.log('not a match')
       }
    })
}


function createUser(req,res,next) {
  console.log(req.body)
  db.none(`INSERT INTO demousers (username, password) VALUES ($1, $2);`, [req.body.username, bcrypt.hashSync(req.body.password, SALTROUNDS)])
  .then(() => {
    next();
  })
}
module.exports = {
  getPassword,
  createUser
};
