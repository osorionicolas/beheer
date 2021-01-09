'use strict'

const utils = require('../helpers/utils')
const knex = require('../configs/database');

const getCourses = async (req, res, next) => {
	const parameters = utils.getParameters(req)
	const query = knex('cursos2')
	utils.get(query).then(result => utils.callback(res, result))
}

module.exports = {
    getCourses
}