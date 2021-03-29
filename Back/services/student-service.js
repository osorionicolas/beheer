'use strict'

const knex = require('../configs/database')
const repository = require('../repositories/student-repository')

const StudentService = {
    filterQuery (reqQuery, fields){
        return (query) => {
            const value = reqQuery?.q
            const course = reqQuery?.a_curso
            if(value && fields.length > 0) {
                fields.forEach(
                    field => 
                        query.orWhere(
                            knex.raw( `UPPER(${field}) LIKE ?`, `%${value.toUpperCase()}%` )
                        )
                )
            }
            if(course) {
                query.where(
                    knex.raw( `a_curso = ?`, course )
                )
            }
        }
    },

    getCount(){
        return repository.count()
    }
}

module.exports = StudentService