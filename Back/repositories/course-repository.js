'use strict'

const knex = require('../configs/database')
const table = knex('cursos2')

const StudentRepository = {

    update(){
        const query = table.update()
    },
    
    async insert(course){
        const query = table.insert(course)
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