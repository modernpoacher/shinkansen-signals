import debug from 'debug'

import yargsParser from 'yargs-parser'

import signals from './signals'

const log = debug('shinkansen-signals')

log('`shinkansen-signals` is awake')

const {
  argv = []
} = process

const filter = ([key, value]) => Reflect.has(signals, key)

const reduce = (accumulator, [key, value]) => ({ ...accumulator, [key]: value })

const SIGNALS = (
  Object.entries(yargsParser(argv.slice(2)))
    .filter(filter)
    .reduce(reduce, {})
)

export default Object.freeze(Object.assign(signals, SIGNALS))
