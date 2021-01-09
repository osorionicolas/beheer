'use strict'

const utils = require('../helpers/utils')

const getCourses = async (req, res, next) => {
    console.log("GET COURSES")
	const filter = req.query.q
	console.log("Filter: " + filter)

	const parameters = utils.getParameters(req)
	const query = utils.createGetAllQuery('cursos2', parameters)
	const total = await utils.getCount('cursos2')
	utils.get(query).then(result => utils.callback(res, result, total))
}

const getCourse = (req, res, next) => {
    console.log("GET COURSE")
    const params = req.params
    const query = utils.createGetOneQuery('cursos2', params)
    utils.get(query)
        .then(result => utils.callback(res, result[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send({"message": error})
        })
}

const getCourseById = (req, res, next) => {
    console.log("GET COURSE BY ID")
    const id = { "id": req.query.id }
    const query = utils.createGetOneQuery('cursos2', id)
    utils.get(query)
        .then(result => utils.callback(res, result[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send({"message": error})
        })
}

module.exports = {
	getCourses,
    getCourse,
    getCourseById
}