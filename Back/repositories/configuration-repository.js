'use strict'

const knex = require('../configs/database')
const table = knex('empresa')

const StudentRepository = {

    update(){
        const query = table.update()
    },

    get(){
        return this.execute(table)
    },

    async execute(query){
        console.log(`Executing query: ${query}`)
        try {
            return await query
        }
        catch(error) {
            console.error(error)
            throw "Failed to connect to database."
        }
    }

}

module.exports = StudentRepository