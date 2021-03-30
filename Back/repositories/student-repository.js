'use strict'

const knex = require('../configs/database')
const table = knex('alumnos2')

const StudentRepository = {

    update(){
        const query = table.update()
    },
    
    async insert(student){
        const query = table.insert([student])
        const result = await this.execute(query)
        return result
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