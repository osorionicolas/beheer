'use strict'

const knex = require('../configs/database')
const table = knex('cursos2')

const StudentRepository = {

    update(){
        const query = table.update()
    },
    
    insert(){
        const query = table.insert()
    },

    count(){
        return table.count('*', {as: 'total'})
    }

}

module.exports = StudentRepository