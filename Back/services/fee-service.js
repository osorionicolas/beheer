'use strict'

const knex = require('../configs/database')
const repository = require('../repositories/fee-repository')

const FeeService = {
    filterQuery (value, fields){
        return (query) => {
            if(value && fields.length > 0) {
                fields.forEach(
                    field => 
                        query.orWhere(
                            knex.raw( `UPPER(${field}) LIKE ?`, `%${value.toUpperCase()}%` )
                        )
                )
            }
        }
    },

    getCount(){
        return repository.count()
    }
}

module.exports = FeeService