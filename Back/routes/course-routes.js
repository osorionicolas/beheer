'use strict'

const router = require('express').Router()
const {
    getCourses,
} = require('../controllers/course-controller')

router.route("/cursos")
      .get(getCourses)

module.exports = router