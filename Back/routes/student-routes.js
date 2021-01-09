'use strict'

const router = require('express').Router()
const {
  getUsers,
} = require('../controllers/student-controller')

router.route("/alumnos")
      .get(getUsers)

module.exports = router