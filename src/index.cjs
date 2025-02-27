require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-signals')

log('`shinkansen` is awake')

const {
  default: Signals // @ts-ignore
} = require('./signals/index.mjs')

module.exports.Signals = Signals
