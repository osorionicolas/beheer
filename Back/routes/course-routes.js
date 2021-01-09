'use strict'

const router = require('express').Router()
const {
    getCourses,
    getCourse,
    getCourseById
} = require('../controllers/course-controller')

router.route("/cursos")
      .get(getCourses)

router.route("/cursos/:id")
      .get(getCourse)

module.exports = router