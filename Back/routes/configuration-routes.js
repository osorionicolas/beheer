'use strict'

const router = require('express').Router()
const {
    updateConfiguration,
    getConfiguration
} = require('../controllers/configuration-controller')

router.route("/configuracion")
      .put(updateConfiguration)
      .get(getConfiguration)

module.exports = router