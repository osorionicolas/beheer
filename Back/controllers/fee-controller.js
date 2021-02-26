'use strict'

const utils = require('../helpers/utils')
const table = 'cuotas2'

const getFees = (req, res) => {
    const fields = ['cuota_legajo']
    const filterQuery = utils.filterQuery(req.query.q, fields)
    const query = utils.createGetAllQuery(table, req.query)
    filterQuery(query)
    const countQuery = utils.createCountQuery(table)
    filterQuery(countQuery)
    utils.getAll(res, query, countQuery)
}

const getFee = (req, res) => {
    const params = req.params
    const query = utils.createGetOneQuery(table, params)
    utils.get(query)
        .then(result => utils.callback(res, result[0], 1))
        .catch(error => utils.handleError(res, error))
}

const updateFee = (req, res) => {
    
}

const createFee = (req, res) => {

}

module.exports = {
    createFee,
	getFees,
    getFee,
    updateFee
}