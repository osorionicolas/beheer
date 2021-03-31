'use strict'

const service = require('../services/invoice-service')

const createInvoice = (req, res) => {
    service.createInvoice().then(data => {
        res.send(data)
    })}

const getLastInvoice = (req, res) => {
    service.getLastInvoice().then(data => {
        res.send(data)
    })}

const getInvoiceInfo = (req, res) => {
    service.getInvoiceInfo().then(data => {
        res.send(data)
    })
}

const getServerStatus = (req, res) => {
    service.getServerStatus().then(data => {
        res.send(data)
    })
}

const generatePDFInvoice = (req, res) => {
    res.send(service.generatePDFInvoice())
}

const testMethod = (req, res) => {
    service.optionTypes().then(data => {
        res.send(data)
    })
}

module.exports = {
    createInvoice,
    getLastInvoice,
    getInvoiceInfo,
    getServerStatus,
    generatePDFInvoice,
    testMethod
}