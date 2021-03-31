'use strict'

const knex = require('../configs/database')
const repository = require('../repositories/course-repository')
const Course = require("../models/Course")

const CourseService = {
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
    },

    createCourse(){
        const course = Object.assign(new Course, body)
        Object.keys(course).forEach(key => course[key] === undefined ? delete course[key] : {});
        return repository.insert(course)
    }
}

module.exports = CourseService