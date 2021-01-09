'use strict'
const knex = require('../configs/database')

const createGetOneQuery = (table, parameters) => {
	const key = Object.keys(parameters)[0];
	const value = Number(parameters[key]);
	return knex(table).where(key, value)
}

const createGetAllQuery = (table, parameters) => {
	let query = knex(table)
	if(parameters._sort && parameters._order) query.orderBy(parameters._sort, parameters._order)
	if(parameters._end && parameters._start) query.limit(parameters._end - parameters._start).offset(parameters._start)
	return query
}

const createCountQuery = (table) => knex(table).count('*', {as: 'total'})

const filterQuery = (value, fields) => (query) => {
	if(value && fields.length > 0) {
		fields.forEach(
			field => 
				query.orWhere(
					knex.raw( `UPPER(${field}) LIKE ?`, `%${value.toUpperCase()}%` )
				)
		)
	}
}

const updateQuery = (table) => {
	const query = knex(table).update()
}

const insertQuery = (table) => {
	const query = knex(table).insert()
}

const getAll = async (res, query, countQuery) => {
	try {
        const count = await get(countQuery)
        const total = count[0].total
        const result = await get(query)
        callback(res, result, total)
    }
    catch(error) {
        handleError(res, error)
    }
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

const handleError = (res, error, status = 500) => {
	console.error(error)
    res.status(status).send({"message": error})
}

const callback = (res, result, total) => {
	res.setHeader("X-Total-Count", total || result.length)
	res.setHeader("Access-Control-Expose-Headers", "*")
	res.send(result) 
}

module.exports = {
    callback,
	createGetAllQuery,
	createGetOneQuery,
	createCountQuery,
	filterQuery,
	get,
	getAll,
	handleError,
	insertQuery,
	updateQuery
}