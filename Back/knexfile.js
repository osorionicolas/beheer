'use strict'

module.exports = {
  development: {
    client: 'mysql2',
	connection: {
		host: 'localhost',
		user: 'root',
		database: 'instituto_electronico'
	},
	debug: true
  },
  production: {
    client: 'mysql2',
	connection: {
		host: 'localhost',
		user: 'root',
		database: 'instituto_electronico'
	},
	debug: true
  }
}