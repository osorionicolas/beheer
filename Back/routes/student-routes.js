'use strict'

const router = require('express').Router()
const {
  getUsers,
  getUser
} = require('../controllers/student-controller')

router.route("/alumnos")
      .get(getUsers)

router.route("/alumnos/:id")
      .get(getUser)

module.exports = router