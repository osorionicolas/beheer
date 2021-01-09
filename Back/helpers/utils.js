'use strict'

const getParameters = (req) => {
	const order = req.query._order
	const sort = req.query._sort
	const start = req.query._start
	const end = req.query._end
	return { 'order': order, 'sort': sort, 'start': start, 'end': end }
}

const callback = (res, result, total) => {
	res.setHeader("X-Total-Count", total || result.length)
	res.setHeader("Access-Control-Expose-Headers", "*")
	res.send(result) 
}

const get = async (query) => {
	console.log(`Executing query: ${query}`)
	try {
		const rows = await query
		return rows
	}
	catch(error) {
		throw "Failed to connect to database."
	}
}

module.exports = {
    getParameters,
    callback,
    get
}