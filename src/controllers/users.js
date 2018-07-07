const userModel = require('../models/users')

function create(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad password'})
  }

  userModel.create(req.body.username, req.body)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAll(req, res, next) {
  userModel.getAll()
  .then(users => {
    res.status(200).send({users})
  })
  .catch(next)
}

function getOne(req, res, next){
  userModel.getOne(req.params.id)
  .then(users => {
    res.status(200).send({users})
  })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  create,
  getAll,
  getOne
}