'use strict'

const knex = require('../configs/database')
const table = knex('cuotas2')

const StudentRepository = {

    update(){
        const query = table.update()
    },
    
    insert(){
        const query = table.insert()
    },

    count(){
        return table.count('*', {as: 'total'})
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