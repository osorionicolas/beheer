'use strict'

const router = require('express').Router()
const {
      createUser,
      deregisterUser,
      getUsers,
      getUser,
      updateUser
} = require('../controllers/student-controller')

router.route("/alumnos")
      .get(getUsers)
      .post(createUser)

router.route("/alumnos/:id")
      .get(getUser)
      .delete(deregisterUser)
      .put(updateUser)

module.exports = router