'use strict'

const router = require('express').Router()
const {
    createFee,
    getFees,
    getFee,
    updateFee
} = require('../controllers/fee-controller')

router.route("/cuotas")
      .get(getFees)
      .post(createFee)

router.route("/cuotas/:id")
      .get(getFee)
      .put(updateFee)

module.exports = router