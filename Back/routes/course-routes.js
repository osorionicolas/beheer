'use strict'

const router = require('express').Router()
const {
    getCourses,
    getCourse,
    getCourseById
} = require('../controllers/course-controller')

const skipIfQuery = (middleware) => {
      return (req, res, next) => {
            const keys = Object.keys(req.query)
            if (keys.length === 1 && keys[0] === "id" ) return next()
            return middleware(req, res, next)
      }
}

router.route("/cursos")
      .get(skipIfQuery(getCourses), getCourseById)

router.route("/cursos/:id")
      .get(getCourse)

module.exports = router