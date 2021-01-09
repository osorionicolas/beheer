'use strict'
const knex = require('../configs/database');

const getParameters = (req) => {
	const order = req.query._order
	const sort = req.query._sort
	const start = req.query._start
	const end = req.query._end
	return { 'order': order, 'sort': sort, 'start': start, 'end': end }
}

const createGetOneQuery = (table, parameters) => {
	const key = Object.keys(parameters)[0];
	const value = Number(parameters[key]);
	return knex(table).where(key, value)
}

const createGetAllQuery = (table, parameters) => {
	return knex(table)
			.orderBy(parameters.sort, parameters.order)
			.limit(parameters.end - parameters.start)
			.offset(parameters.start)
}

const getCount = async (table) => {
    const countQuery = knex(table).count('*', {as: 'total'})
	const count = await get(countQuery)
	return count[0].total
}

const get = async (query) => {
	console.log(`Executing query: ${query}`)
	try {
		return await query
	}
	catch(error) {
		throw "Failed to connect to database."
	}
}

const callback = (res, result, total) => {
	if(total) res.setHeader("X-Total-Count", total)
	res.setHeader("Access-Control-Expose-Headers", "*")
	res.send(result) 
}

module.exports = {
    getParameters,
    callback,
	get,
	createGetAllQuery,
	createGetOneQuery,
	getCount
}