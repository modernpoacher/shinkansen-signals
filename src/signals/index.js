import debug from 'debug'

import yargs from 'yargs'
import {
  hideBin
} from 'yargs/helpers'

import signals from './signals'

const log = debug('shinkansen-signals')

log('`shinkansen-signals` is awake')

const {
  argv = []
} = process

const filter = ([key, value]) => Reflect.has(signals, key)

const reduce = (accumulator, [key, value]) => ({ ...accumulator, [key]: value })

const SIGNALS = (
  Object.entries(yargs(hideBin(argv)))
    .filter(filter)
    .reduce(reduce, {})
)

export default Object.freeze(Object.assign(signals, SIGNALS))
