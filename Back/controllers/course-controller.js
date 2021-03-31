'use strict'

const utils = require('../helpers/utils')
const service = require('../services/course-service')
const table = 'cursos2'

const getCourses = (req, res) => {
    const fields = ['c_curso', 'c_horario']
    const filterQuery = service.filterQuery(req.query.q, fields)
    const query = utils.createGetAllQuery(table, req.query)
    filterQuery(query)
    const countQuery = service.getCount(table)
    filterQuery(countQuery)
    utils.getAll(res, query, countQuery)
}

const getCourse = (req, res) => {
    const params = req.params
    const query = utils.createGetOneQuery(table, params)
    utils.get(query)
        .then(result => utils.callback(res, result[0], result.length))
        .catch(error => utils.handleError(res, error))
}

const getCourseById = (req, res) => {
    const id = { "id": req.query.id }
    const query = utils.createGetOneQuery(table, id)
    utils.get(query)
        .then(result => utils.callback(res, result, result.length))
        .catch(error => utils.handleError(res, error))
}

const updateCourse = (req, res) => {
    
}

const createCourse = async (req, res) => {
    const courseId = await service.createCourse(req.body)
    res.statusCode = 201
    res.send(courseId)
}

module.exports = {
    createCourse,
	getCourses,
    getCourse,
    getCourseById,
    updateCourse
}