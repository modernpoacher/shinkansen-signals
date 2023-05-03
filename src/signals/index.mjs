import debug from 'debug'

import signals from './signals.mjs'

const log = debug('shinkansen-signals')

log('`shinkansen-signals` is awake')

export default Object.freeze(signals)
