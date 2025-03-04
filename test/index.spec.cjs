const {
  expect // @ts-ignore
} = require('chai')

const {
  Signals
} = require('#signals')

describe('#signals', () => {
  it('is an object', () => {
    expect(Signals)
      .to.be.an('object')
  })
})
