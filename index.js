const debug = require('debug')

const log = debug('shinkansen:signals')

log('`signals` is awake')

module.exports = require('./lib')
