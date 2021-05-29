import { expect } from 'chai'

import Signals from 'shinkansen-signals/signals'

describe('shinkansen-signals/signals', () => {
  it('is a function', () => {
    expect(Signals)
      .to.be.an('object')
  })

  describe('`Signals.ALPHA`', () => {
    it('is a string', () => {
      expect(Signals.ALPHA)
        .to.be.a('string')
    })

    it('is `alpha`', () => {
      expect(Signals.ALPHA)
        .to.equal('alpha')
    })
  })

  describe('`Signals.OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.OMEGA)
        .to.be.a('string')
    })

    it('is `omega`', () => {
      expect(Signals.OMEGA)
        .to.equal('omega')
    })
  })

  describe('`Signals.EMBARK`', () => {
    it('is a string', () => {
      expect(Signals.EMBARK)
        .to.be.a('string')
    })

    it('is `embark`', () => {
      expect(Signals.EMBARK)
        .to.equal('embark')
    })
  })

  describe('`Signals.DEBARK`', () => {
    it('is a string', () => {
      expect(Signals.DEBARK)
        .to.be.a('string')
    })

    it('is `debark`', () => {
      expect(Signals.DEBARK)
        .to.equal('debark')
    })
  })

  describe('`Signals.CONFIRM`', () => {
    it('is a string', () => {
      expect(Signals.CONFIRM)
        .to.be.a('string')
    })

    it('is `confirm`', () => {
      expect(Signals.CONFIRM)
        .to.equal('confirm')
    })
  })

  describe('`Signals.INDEX`', () => {
    it('is a string', () => {
      expect(Signals.INDEX)
        .to.be.a('string')
    })

    it('is `INDEX`', () => {
      expect(Signals.INDEX)
        .to.equal('INDEX')
    })
  })

  describe('`Signals.ALPHA_PATTERN`', () => {
    it('is a string', () => {
      expect(Signals.ALPHA_PATTERN)
        .to.be.a('string')
    })

    it('is `/:alpha`', () => {
      expect(Signals.ALPHA_PATTERN)
        .to.equal('/:alpha')
    })
  })

  describe('`Signals.OMEGA_PATTERN`', () => {
    it('is a string', () => {
      expect(Signals.OMEGA_PATTERN)
        .to.be.a('string')
    })

    it('is `/:alpha/:omega`', () => {
      expect(Signals.OMEGA_PATTERN)
        .to.equal('/:alpha/:omega')
    })
  })

  describe('`Signals.EMBARK_STAGE`', () => {
    it('is a string', () => {
      expect(Signals.EMBARK_STAGE)
        .to.be.a('string')
    })

    it('is `embark-stage`', () => {
      expect(Signals.EMBARK_STAGE)
        .to.equal('embark-stage')
    })
  })

  describe('`Signals.DEBARK_STAGE`', () => {
    it('is a string', () => {
      expect(Signals.DEBARK_STAGE)
        .to.be.a('string')
    })

    it('is `debark-stage`', () => {
      expect(Signals.DEBARK_STAGE)
        .to.equal('debark-stage')
    })
  })

  describe('`Signals.CONFIRM_STAGE`', () => {
    it('is a string', () => {
      expect(Signals.CONFIRM_STAGE)
        .to.be.a('string')
    })

    it('is `confirm-stage`', () => {
      expect(Signals.CONFIRM_STAGE)
        .to.equal('confirm-stage')
    })
  })

  describe('`Signals.EMBARK_PATTERN`', () => {
    it('is a string', () => {
      expect(Signals.EMBARK_PATTERN)
        .to.be.a('string')
    })

    it('is `/:embark`', () => {
      expect(Signals.EMBARK_PATTERN)
        .to.equal('/:embark')
    })
  })

  describe('`Signals.DEBARK_PATTERN`', () => {
    it('is a string', () => {
      expect(Signals.DEBARK_PATTERN)
        .to.be.a('string')
    })

    it('is `/:debark`', () => {
      expect(Signals.DEBARK_PATTERN)
        .to.equal('/:debark')
    })
  })

  describe('`Signals.CONFIRM_PATTERN`', () => {
    it('is a string', () => {
      expect(Signals.CONFIRM_PATTERN)
        .to.be.a('string')
    })

    it('is `/:confirm`', () => {
      expect(Signals.CONFIRM_PATTERN)
        .to.equal('/:confirm')
    })
  })

  describe('`Signals.ENTER_ALPHA`', () => {
    it('is a string', () => {
      expect(Signals.ENTER_ALPHA)
        .to.be.a('string')
    })

    it('is `ENTER_ALPHA`', () => {
      expect(Signals.ENTER_ALPHA)
        .to.equal('ENTER_ALPHA')
    })
  })

  describe('`Signals.LEAVE_ALPHA`', () => {
    it('is a string', () => {
      expect(Signals.LEAVE_ALPHA)
        .to.be.a('string')
    })

    it('is `LEAVE_ALPHA`', () => {
      expect(Signals.LEAVE_ALPHA)
        .to.equal('LEAVE_ALPHA')
    })
  })

  describe('`Signals.CHANGE_ALPHA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_ALPHA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA`', () => {
      expect(Signals.CHANGE_ALPHA)
        .to.equal('CHANGE_ALPHA')
    })
  })

  describe('`Signals.REMAIN_ALPHA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_ALPHA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA`', () => {
      expect(Signals.REMAIN_ALPHA)
        .to.equal('REMAIN_ALPHA')
    })
  })

  describe('`Signals.ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `ENTER_OMEGA`', () => {
      expect(Signals.ENTER_OMEGA)
        .to.equal('ENTER_OMEGA')
    })
  })

  describe('`Signals.LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `LEAVE_OMEGA`', () => {
      expect(Signals.LEAVE_OMEGA)
        .to.equal('LEAVE_OMEGA')
    })
  })

  describe('`Signals.CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_OMEGA`', () => {
      expect(Signals.CHANGE_OMEGA)
        .to.equal('CHANGE_OMEGA')
    })
  })

  describe('`Signals.REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_OMEGA`', () => {
      expect(Signals.REMAIN_OMEGA)
        .to.equal('REMAIN_OMEGA')
    })
  })

  describe('`Signals.ENTER_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.ENTER_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `ENTER_ALPHA_ENTER_OMEGA`', () => {
      expect(Signals.ENTER_ALPHA_ENTER_OMEGA)
        .to.equal('ENTER_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`Signals.LEAVE_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.LEAVE_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `LEAVE_ALPHA_LEAVE_OMEGA`', () => {
      expect(Signals.LEAVE_ALPHA_LEAVE_OMEGA)
        .to.equal('LEAVE_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`Signals.CHANGE_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_ENTER_OMEGA`', () => {
      expect(Signals.CHANGE_ALPHA_ENTER_OMEGA)
        .to.equal('CHANGE_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`Signals.CHANGE_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_LEAVE_OMEGA`', () => {
      expect(Signals.CHANGE_ALPHA_LEAVE_OMEGA)
        .to.equal('CHANGE_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`Signals.REMAIN_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_ENTER_OMEGA`', () => {
      expect(Signals.REMAIN_ALPHA_ENTER_OMEGA)
        .to.equal('REMAIN_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`Signals.REMAIN_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_LEAVE_OMEGA`', () => {
      expect(Signals.REMAIN_ALPHA_LEAVE_OMEGA)
        .to.equal('REMAIN_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`Signals.CHANGE_ALPHA_CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_ALPHA_CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_CHANGE_OMEGA`', () => {
      expect(Signals.CHANGE_ALPHA_CHANGE_OMEGA)
        .to.equal('CHANGE_ALPHA_CHANGE_OMEGA')
    })
  })

  describe('`Signals.CHANGE_ALPHA_REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.CHANGE_ALPHA_REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_REMAIN_OMEGA`', () => {
      expect(Signals.CHANGE_ALPHA_REMAIN_OMEGA)
        .to.equal('CHANGE_ALPHA_REMAIN_OMEGA')
    })
  })

  describe('`Signals.REMAIN_ALPHA_CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_ALPHA_CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_CHANGE_OMEGA`', () => {
      expect(Signals.REMAIN_ALPHA_CHANGE_OMEGA)
        .to.equal('REMAIN_ALPHA_CHANGE_OMEGA')
    })
  })

  describe('`Signals.REMAIN_ALPHA_REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(Signals.REMAIN_ALPHA_REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is a `REMAIN_ALPHA_REMAIN_OMEGA`', () => {
      expect(Signals.REMAIN_ALPHA_REMAIN_OMEGA)
        .to.equal('REMAIN_ALPHA_REMAIN_OMEGA')
    })
  })

  describe('`Signals.EXCEPTION`', () => {
    it('is a string', () => {
      expect(Signals.EXCEPTION)
        .to.be.a('string')
    })

    it('is a `EXCEPTION`', () => {
      expect(Signals.EXCEPTION)
        .to.equal('EXCEPTION')
    })
  })

  describe('`Signals.FAILURE`', () => {
    it('is a number', () => {
      expect(Signals.FAILURE)
        .to.be.a('number')
    })

    it('is 0', () => {
      expect(Signals.FAILURE)
        .to.equal(0)
    })
  })

  describe('`Signals.SUCCESS`', () => {
    it('is a number', () => {
      expect(Signals.SUCCESS)
        .to.be.a('number')
    })

    it('is 1', () => {
      expect(Signals.SUCCESS)
        .to.equal(1)
    })
  })

  describe('`Signals.IN_PROGRESS`', () => {
    it('is a number', () => {
      expect(Signals.IN_PROGRESS)
        .to.be.a('number')
    })

    it('is 3', () => {
      expect(Signals.IN_PROGRESS)
        .to.equal(3)
    })
  })

  describe('`Signals.UNKNOWN`', () => {
    it('is a number', () => {
      expect(Signals.UNKNOWN)
        .to.be.a('number')
    })

    it('is 4', () => {
      expect(Signals.UNKNOWN)
        .to.equal(4)
    })
  })

  describe('`Signals.COMPLETE`', () => {
    it('is a number', () => {
      expect(Signals.COMPLETE)
        .to.be.a('number')
    })

    it('is 5', () => {
      expect(Signals.COMPLETE)
        .to.equal(5)
    })
  })
})
