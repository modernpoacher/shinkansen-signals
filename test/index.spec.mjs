import {
  expect
} from 'chai'

import {
  Signals
} from '#signals'

describe('#signals', () => {
  it('is an object', () => {
    expect(Signals)
      .to.be.an('object')
  })
})
