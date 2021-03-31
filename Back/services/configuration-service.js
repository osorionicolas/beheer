'use strict'

const knex = require('../configs/database')
const repository = require('../repositories/configuration-repository')
const Configuration = require("../models/Configuration")

const ConfigurationService = {
    updateConfiguration(){
    },

    getConfiguration(){
        return repository.get()
    }
}

module.exports = ConfigurationService