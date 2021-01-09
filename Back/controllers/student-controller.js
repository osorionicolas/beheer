'use strict'

const utils = require('../helpers/utils')
const table = 'alumnos2'

const getUsers = (req, res) => {
    const fields = ['a_legajo', 'a_apellido', 'a_mama', 'a_papa']
    const filterQuery = utils.filterQuery(req.query.q, fields)
    const query = utils.createGetAllQuery(table, req.query)
    filterQuery(query)
    const countQuery = utils.createCountQuery(table)
    filterQuery(query)
    utils.getAll(res, query, countQuery)
}

const getUser = (req, res) => {
    const params = req.params
    const query = utils.createGetOneQuery(table, params)
    utils.get(query)
        .then(result => utils.callback(res, result[0], 1))
        .catch(error => utils.handleError(res, error))
}

const deregisterUser = (req, res) => {

}

const updateUser = (req, res) => {
    
}

const createUser = (req, res) => {

}

module.exports = {
    createUser,
    deregisterUser,
    getUsers,
    getUser,
    updateUser
}