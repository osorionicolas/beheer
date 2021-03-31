'use strict'

const service = require('../services/configuration-service')

const updateConfiguration = (req, res) => {
    service.updateConfiguration().then(data => {
        res.send(data)
    })}

const getConfiguration = (req, res) => {
    service.getConfiguration().then(data => {
        console.log(data[0])
        res.send(data[0])
    })}

module.exports = {
    updateConfiguration,
    getConfiguration
}