'use strict'

const invoiceService = require('../services/invoice-service')

const createInvoice = (req, res) => {
    invoiceService.createInvoice().then(data => {
        res.send(data)
    })}

const getLastInvoice = (req, res) => {
    invoiceService.getLastInvoice().then(data => {
        res.send(data)
    })}

const getInvoiceInfo = (req, res) => {
    invoiceService.getInvoiceInfo().then(data => {
        res.send(data)
    })
}

const getServerStatus = (req, res) => {
    invoiceService.getServerStatus().then(data => {
        res.send(data)
    })
}

const generatePDFInvoice = (req, res) => {
    res.send(invoiceService.generatePDFInvoice())
}

const testMethod = (req, res) => {
    invoiceService.optionTypes().then(data => {
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