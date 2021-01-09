'use strict'

const utils = require('../helpers/utils')
const table = 'cursos2'

const getCourses = (req, res) => {
    const fields = ['c_curso', 'c_horario']
    const filterQuery = utils.filterQuery(req.query.q, fields)
    const query = utils.createGetAllQuery(table, req.query)
    filterQuery(query)
    const countQuery = utils.createCountQuery(table)
    filterQuery(countQuery)
    utils.getAll(res, query, countQuery)
}

const getCourse = (req, res) => {
    const params = req.params
    const query = utils.createGetOneQuery(table, params)
    utils.get(query)
        .then(result => utils.callback(res, result[0], 1))
        .catch(error => utils.handleError(res, error))
}

const getCourseById = (req, res) => {
    const id = { "id": req.query.id }
    const query = utils.createGetOneQuery(table, id)
    utils.get(query)
        .then(result => utils.callback(res, result[0], 1))
        .catch(error => utils.handleError(res, error))
}

const updateUser = (req, res) => {
    
}

module.exports = {
	getCourses,
    getCourse,
    getCourseById,
    updateUser
}