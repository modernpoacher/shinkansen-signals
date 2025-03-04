import {
  expect
} from 'chai'

import {
  INDEX,

  ALPHA,
  OMEGA,
  EMBARK,
  DEBARK,
  CONFIRM,

  ALPHA_STAGE,
  OMEGA_STAGE,
  EMBARK_STAGE,
  DEBARK_STAGE,
  CONFIRM_STAGE,

  ALPHA_PATTERN,
  OMEGA_PATTERN,
  EMBARK_PATTERN,
  DEBARK_PATTERN,
  CONFIRM_PATTERN,

  ENTER_ALPHA,
  LEAVE_ALPHA,
  CHANGE_ALPHA,
  REMAIN_ALPHA,

  ENTER_OMEGA,
  LEAVE_OMEGA,
  CHANGE_OMEGA,
  REMAIN_OMEGA,

  ENTER_ALPHA_ENTER_OMEGA,
  LEAVE_ALPHA_LEAVE_OMEGA,
  CHANGE_ALPHA_ENTER_OMEGA,
  CHANGE_ALPHA_LEAVE_OMEGA,
  REMAIN_ALPHA_ENTER_OMEGA,
  REMAIN_ALPHA_LEAVE_OMEGA,
  CHANGE_ALPHA_CHANGE_OMEGA,
  CHANGE_ALPHA_REMAIN_OMEGA,
  REMAIN_ALPHA_CHANGE_OMEGA,
  REMAIN_ALPHA_REMAIN_OMEGA,

  EXCEPTION,

  FAILURE,
  SUCCESS,
  IN_PROGRESS,
  UNKNOWN,
  COMPLETE
} from '#signals/signals/signals'

describe('#signals/signals/signals', () => {
  describe('`INDEX`', () => {
    it('is a string', () => {
      expect(INDEX)
        .to.be.a('string')
    })

    it('is `INDEX`', () => {
      expect(INDEX)
        .to.equal('INDEX')
    })
  })

  describe('`ALPHA`', () => {
    it('is a string', () => {
      expect(ALPHA)
        .to.be.a('string')
    })

    it('is `alpha`', () => {
      expect(ALPHA)
        .to.equal('alpha')
    })
  })

  describe('`OMEGA`', () => {
    it('is a string', () => {
      expect(OMEGA)
        .to.be.a('string')
    })

    it('is `omega`', () => {
      expect(OMEGA)
        .to.equal('omega')
    })
  })

  describe('`EMBARK`', () => {
    it('is a string', () => {
      expect(EMBARK)
        .to.be.a('string')
    })

    it('is `embark`', () => {
      expect(EMBARK)
        .to.equal('embark')
    })
  })

  describe('`DEBARK`', () => {
    it('is a string', () => {
      expect(DEBARK)
        .to.be.a('string')
    })

    it('is `debark`', () => {
      expect(DEBARK)
        .to.equal('debark')
    })
  })

  describe('`CONFIRM`', () => {
    it('is a string', () => {
      expect(CONFIRM)
        .to.be.a('string')
    })

    it('is `confirm`', () => {
      expect(CONFIRM)
        .to.equal('confirm')
    })
  })

  describe('`ALPHA_STAGE`', () => {
    it('is a string', () => {
      expect(ALPHA_STAGE)
        .to.be.a('string')
    })

    it('is `alpha-stage`', () => {
      expect(ALPHA_STAGE)
        .to.equal('alpha-stage')
    })
  })

  describe('`OMEGA_STAGE`', () => {
    it('is a string', () => {
      expect(OMEGA_STAGE)
        .to.be.a('string')
    })

    it('is `omega-stage`', () => {
      expect(OMEGA_STAGE)
        .to.equal('omega-stage')
    })
  })

  describe('`EMBARK_STAGE`', () => {
    it('is a string', () => {
      expect(EMBARK_STAGE)
        .to.be.a('string')
    })

    it('is `embark-stage`', () => {
      expect(EMBARK_STAGE)
        .to.equal('embark-stage')
    })
  })

  describe('`DEBARK_STAGE`', () => {
    it('is a string', () => {
      expect(DEBARK_STAGE)
        .to.be.a('string')
    })

    it('is `debark-stage`', () => {
      expect(DEBARK_STAGE)
        .to.equal('debark-stage')
    })
  })

  describe('`CONFIRM_STAGE`', () => {
    it('is a string', () => {
      expect(CONFIRM_STAGE)
        .to.be.a('string')
    })

    it('is `confirm-stage`', () => {
      expect(CONFIRM_STAGE)
        .to.equal('confirm-stage')
    })
  })

  describe('`ALPHA_PATTERN`', () => {
    it('is a string', () => {
      expect(ALPHA_PATTERN)
        .to.be.a('string')
    })

    it('is `/:alpha`', () => {
      expect(ALPHA_PATTERN)
        .to.equal('/:alpha')
    })
  })

  describe('`OMEGA_PATTERN`', () => {
    it('is a string', () => {
      expect(OMEGA_PATTERN)
        .to.be.a('string')
    })

    it('is `/:alpha/:omega`', () => {
      expect(OMEGA_PATTERN)
        .to.equal('/:alpha/:omega')
    })
  })

  describe('`EMBARK_PATTERN`', () => {
    it('is a string', () => {
      expect(EMBARK_PATTERN)
        .to.be.a('string')
    })

    it('is `/:embark`', () => {
      expect(EMBARK_PATTERN)
        .to.equal('/:embark')
    })
  })

  describe('`DEBARK_PATTERN`', () => {
    it('is a string', () => {
      expect(DEBARK_PATTERN)
        .to.be.a('string')
    })

    it('is `/:debark`', () => {
      expect(DEBARK_PATTERN)
        .to.equal('/:debark')
    })
  })

  describe('`CONFIRM_PATTERN`', () => {
    it('is a string', () => {
      expect(CONFIRM_PATTERN)
        .to.be.a('string')
    })

    it('is `/:confirm`', () => {
      expect(CONFIRM_PATTERN)
        .to.equal('/:confirm')
    })
  })

  describe('`ENTER_ALPHA`', () => {
    it('is a string', () => {
      expect(ENTER_ALPHA)
        .to.be.a('string')
    })

    it('is `ENTER_ALPHA`', () => {
      expect(ENTER_ALPHA)
        .to.equal('ENTER_ALPHA')
    })
  })

  describe('`LEAVE_ALPHA`', () => {
    it('is a string', () => {
      expect(LEAVE_ALPHA)
        .to.be.a('string')
    })

    it('is `LEAVE_ALPHA`', () => {
      expect(LEAVE_ALPHA)
        .to.equal('LEAVE_ALPHA')
    })
  })

  describe('`CHANGE_ALPHA`', () => {
    it('is a string', () => {
      expect(CHANGE_ALPHA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA`', () => {
      expect(CHANGE_ALPHA)
        .to.equal('CHANGE_ALPHA')
    })
  })

  describe('`REMAIN_ALPHA`', () => {
    it('is a string', () => {
      expect(REMAIN_ALPHA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA`', () => {
      expect(REMAIN_ALPHA)
        .to.equal('REMAIN_ALPHA')
    })
  })

  describe('`ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `ENTER_OMEGA`', () => {
      expect(ENTER_OMEGA)
        .to.equal('ENTER_OMEGA')
    })
  })

  describe('`LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `LEAVE_OMEGA`', () => {
      expect(LEAVE_OMEGA)
        .to.equal('LEAVE_OMEGA')
    })
  })

  describe('`CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_OMEGA`', () => {
      expect(CHANGE_OMEGA)
        .to.equal('CHANGE_OMEGA')
    })
  })

  describe('`REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_OMEGA`', () => {
      expect(REMAIN_OMEGA)
        .to.equal('REMAIN_OMEGA')
    })
  })

  describe('`ENTER_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(ENTER_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `ENTER_ALPHA_ENTER_OMEGA`', () => {
      expect(ENTER_ALPHA_ENTER_OMEGA)
        .to.equal('ENTER_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`LEAVE_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(LEAVE_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `LEAVE_ALPHA_LEAVE_OMEGA`', () => {
      expect(LEAVE_ALPHA_LEAVE_OMEGA)
        .to.equal('LEAVE_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`CHANGE_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(CHANGE_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_ENTER_OMEGA`', () => {
      expect(CHANGE_ALPHA_ENTER_OMEGA)
        .to.equal('CHANGE_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`CHANGE_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(CHANGE_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_LEAVE_OMEGA`', () => {
      expect(CHANGE_ALPHA_LEAVE_OMEGA)
        .to.equal('CHANGE_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`REMAIN_ALPHA_ENTER_OMEGA`', () => {
    it('is a string', () => {
      expect(REMAIN_ALPHA_ENTER_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_ENTER_OMEGA`', () => {
      expect(REMAIN_ALPHA_ENTER_OMEGA)
        .to.equal('REMAIN_ALPHA_ENTER_OMEGA')
    })
  })

  describe('`REMAIN_ALPHA_LEAVE_OMEGA`', () => {
    it('is a string', () => {
      expect(REMAIN_ALPHA_LEAVE_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_LEAVE_OMEGA`', () => {
      expect(REMAIN_ALPHA_LEAVE_OMEGA)
        .to.equal('REMAIN_ALPHA_LEAVE_OMEGA')
    })
  })

  describe('`CHANGE_ALPHA_CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(CHANGE_ALPHA_CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_CHANGE_OMEGA`', () => {
      expect(CHANGE_ALPHA_CHANGE_OMEGA)
        .to.equal('CHANGE_ALPHA_CHANGE_OMEGA')
    })
  })

  describe('`CHANGE_ALPHA_REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(CHANGE_ALPHA_REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is `CHANGE_ALPHA_REMAIN_OMEGA`', () => {
      expect(CHANGE_ALPHA_REMAIN_OMEGA)
        .to.equal('CHANGE_ALPHA_REMAIN_OMEGA')
    })
  })

  describe('`REMAIN_ALPHA_CHANGE_OMEGA`', () => {
    it('is a string', () => {
      expect(REMAIN_ALPHA_CHANGE_OMEGA)
        .to.be.a('string')
    })

    it('is `REMAIN_ALPHA_CHANGE_OMEGA`', () => {
      expect(REMAIN_ALPHA_CHANGE_OMEGA)
        .to.equal('REMAIN_ALPHA_CHANGE_OMEGA')
    })
  })

  describe('`REMAIN_ALPHA_REMAIN_OMEGA`', () => {
    it('is a string', () => {
      expect(REMAIN_ALPHA_REMAIN_OMEGA)
        .to.be.a('string')
    })

    it('is a `REMAIN_ALPHA_REMAIN_OMEGA`', () => {
      expect(REMAIN_ALPHA_REMAIN_OMEGA)
        .to.equal('REMAIN_ALPHA_REMAIN_OMEGA')
    })
  })

  describe('`EXCEPTION`', () => {
    it('is a string', () => {
      expect(EXCEPTION)
        .to.be.a('string')
    })

    it('is a `EXCEPTION`', () => {
      expect(EXCEPTION)
        .to.equal('EXCEPTION')
    })
  })

  describe('`FAILURE`', () => {
    it('is a number', () => {
      expect(FAILURE)
        .to.be.a('number')
    })

    it('is 0', () => {
      expect(FAILURE)
        .to.equal(0)
    })
  })

  describe('`SUCCESS`', () => {
    it('is a number', () => {
      expect(SUCCESS)
        .to.be.a('number')
    })

    it('is 1', () => {
      expect(SUCCESS)
        .to.equal(1)
    })
  })

  describe('`IN_PROGRESS`', () => {
    it('is a number', () => {
      expect(IN_PROGRESS)
        .to.be.a('number')
    })

    it('is 3', () => {
      expect(IN_PROGRESS)
        .to.equal(3)
    })
  })

  describe('`UNKNOWN`', () => {
    it('is a number', () => {
      expect(UNKNOWN)
        .to.be.a('number')
    })

    it('is 4', () => {
      expect(UNKNOWN)
        .to.equal(4)
    })
  })

  describe('`COMPLETE`', () => {
    it('is a number', () => {
      expect(COMPLETE)
        .to.be.a('number')
    })

    it('is 5', () => {
      expect(COMPLETE)
        .to.equal(5)
    })
  })
})
