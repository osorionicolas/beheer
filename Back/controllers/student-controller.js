'use strict'

const utils = require('../helpers/utils')

const getUsers = async (req, res, next) => {
    const filter = req.query.q
    console.log("Filter: " + filter)
	const parameters = utils.getParameters(req)
    const query = utils.createGetAllQuery('alumnos2', parameters)
    const total = await utils.getCount('alumnos2')
    utils.get(query)
        .then(result => utils.callback(res, result, total))
        .catch(error => {
            console.error(error)
            res.status(500).send({"message": error})
        })
}

const getUser = (req, res, next) => {
    const params = req.params
    const query = utils.createGetOneQuery('alumnos2', params)
    utils.get(query)
        .then(result => utils.callback(res, result[0]))
        .catch(error => {
            console.error(error)
            res.status(500).send({"message": error})
        })
}

module.exports = {
    getUsers,
    getUser
}