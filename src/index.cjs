require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen-)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-signals')

log('`shinkansen` is awake')

const {
  default: Signals
} = require('./signals/index.mjs')

module.exports.Signals = Signals
