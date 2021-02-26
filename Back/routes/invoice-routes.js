'use strict'

const router = require('express').Router()
const {
    createInvoice,
    getInvoiceInfo,
    generatePDFInvoice,
    testMethod
} = require('../controllers/invoice-controller')

router.route("/facturas")
      .post(createInvoice)
      .get(testMethod)

module.exports = router