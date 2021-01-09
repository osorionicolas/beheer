'use strict'

const utils = require('../helpers/utils')
const knex = require('../configs/database');

const getUsers = async (req, res, next) => {
    const filter = req.query.filter
	const parameters = utils.getParameters(req)
    const query = 
        knex('alumnos2')
            .orderBy(parameters.sort, parameters.order)
            .limit(parameters.end - parameters.start)
            .offset(parameters.start)
    const countQuery = knex('alumnos2').count('*', {as: 'total'})
    const count = await utils.get(countQuery)
    const total = count[0].total
    utils.get(query)
        .then(result => utils.callback(res, result, total))
        .catch(error => {
            console.error(error)
            res.status(500).send({"message": error})
        })
}

module.exports = {
    getUsers
}