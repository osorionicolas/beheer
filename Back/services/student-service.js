'use strict'

const knex = require('../configs/database')
const repository = require('../repositories/student-repository')
const Student = require("../models/Student")

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
    },

    createStudent(body){
        const student = Object.assign(new Student, body)
        student.a_fecha_inscripcion = new Date().toISOString().slice(0, 10)
        Object.keys(student).forEach(key => student[key] === undefined ? delete student[key] : {});
        return repository.insert(student)
    }
}

module.exports = StudentService