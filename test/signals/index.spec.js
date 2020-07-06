import { expect } from 'chai'

import Signals from 'shinkansen-signals/signals'

describe('shinkansen-signals/signals', () => {
  it('is a function', () => {
    expect(Signals)
      .to.be.a('function')
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

  describe('`Signals.raise`', () => {
    it('is a function', () => {
      expect(Signals.raise)
        .to.be.a('function')
    })
  })

  describe('`Signals.raise()`', () => {
    beforeEach(() => {
      Signals.raise({
        ALPHA: 'MOCK ALPHA',
        OMEGA: 'MOCK OMEGA',

        EMBARK: 'MOCK EMBARK',
        DEBARK: 'MOCK DEBARK',

        CONFIRM: 'MOCK CONFIRM',

        INDEX: 'MOCK INDEX',

        EMBARK_STAGE: 'MOCK EMBARK_STAGE',
        DEBARK_STAGE: 'MOCK DEBARK_STAGE',

        CONFIRM_STAGE: 'MOCK CONFIRM_STAGE',

        ALPHA_PATTERN: 'MOCK ALPHA_PATTERN',
        OMEGA_PATTERN: 'MOCK OMEGA_PATTERN',

        EMBARK_PATTERN: 'MOCK EMBARK_PATTERN',
        DEBARK_PATTERN: 'MOCK DEBARK_PATTERN',

        CONFIRM_PATTERN: 'MOCK CONFIRM_PATTERN',

        ENTER_ALPHA: 'MOCK ENTER_ALPHA',
        LEAVE_ALPHA: 'MOCK LEAVE_ALPHA',

        CHANGE_ALPHA: 'MOCK CHANGE_ALPHA',
        REMAIN_ALPHA: 'MOCK REMAIN_ALPHA',

        ENTER_OMEGA: 'MOCK ENTER_OMEGA',
        LEAVE_OMEGA: 'MOCK LEAVE_OMEGA',

        CHANGE_OMEGA: 'MOCK CHANGE_OMEGA',
        REMAIN_OMEGA: 'MOCK REMAIN_OMEGA',

        ENTER_ALPHA_ENTER_OMEGA: 'MOCK ENTER_ALPHA_ENTER_OMEGA',
        LEAVE_ALPHA_LEAVE_OMEGA: 'MOCK LEAVE_ALPHA_LEAVE_OMEGA',

        CHANGE_ALPHA_ENTER_OMEGA: 'MOCK CHANGE_ALPHA_ENTER_OMEGA',
        CHANGE_ALPHA_LEAVE_OMEGA: 'MOCK CHANGE_ALPHA_LEAVE_OMEGA',

        REMAIN_ALPHA_ENTER_OMEGA: 'MOCK REMAIN_ALPHA_ENTER_OMEGA',
        REMAIN_ALPHA_LEAVE_OMEGA: 'MOCK REMAIN_ALPHA_LEAVE_OMEGA',

        CHANGE_ALPHA_CHANGE_OMEGA: 'MOCK CHANGE_ALPHA_CHANGE_OMEGA',
        CHANGE_ALPHA_REMAIN_OMEGA: 'MOCK CHANGE_ALPHA_REMAIN_OMEGA',

        REMAIN_ALPHA_CHANGE_OMEGA: 'MOCK REMAIN_ALPHA_CHANGE_OMEGA',
        REMAIN_ALPHA_REMAIN_OMEGA: 'MOCK REMAIN_ALPHA_REMAIN_OMEGA',

        EXCEPTION: 'MOCK EXCEPTION',

        FAILURE: 100,
        SUCCESS: 101,
        IN_PROGRESS: 103,
        UNKNOWN: 104,
        COMPLETE: 105
      })
    })

    describe('`Signals.ALPHA`', () => {
      it('is a string', () => {
        expect(Signals.ALPHA)
          .to.be.a('string')
      })

      it('is `MOCK ALPHA`', () => {
        expect(Signals.ALPHA)
          .to.equal('MOCK ALPHA')
      })
    })

    describe('`Signals.OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK OMEGA`', () => {
        expect(Signals.OMEGA)
          .to.equal('MOCK OMEGA')
      })
    })

    describe('`Signals.EMBARK`', () => {
      it('is a string', () => {
        expect(Signals.EMBARK)
          .to.be.a('string')
      })

      it('is `MOCK EMBARK`', () => {
        expect(Signals.EMBARK)
          .to.equal('MOCK EMBARK')
      })
    })

    describe('`Signals.DEBARK`', () => {
      it('is a string', () => {
        expect(Signals.DEBARK)
          .to.be.a('string')
      })

      it('is `MOCK DEBARK`', () => {
        expect(Signals.DEBARK)
          .to.equal('MOCK DEBARK')
      })
    })

    describe('`Signals.CONFIRM`', () => {
      it('is a string', () => {
        expect(Signals.CONFIRM)
          .to.be.a('string')
      })

      it('is `MOCK CONFIRM`', () => {
        expect(Signals.CONFIRM)
          .to.equal('MOCK CONFIRM')
      })
    })

    describe('`Signals.INDEX`', () => {
      it('is a string', () => {
        expect(Signals.INDEX)
          .to.be.a('string')
      })

      it('is `MOCK INDEX`', () => {
        expect(Signals.INDEX)
          .to.equal('MOCK INDEX')
      })
    })

    describe('`Signals.EMBARK_STAGE`', () => {
      it('is a string', () => {
        expect(Signals.EMBARK_STAGE)
          .to.be.a('string')
      })

      it('is `MOCK EMBARK_STAGE`', () => {
        expect(Signals.EMBARK_STAGE)
          .to.equal('MOCK EMBARK_STAGE')
      })
    })

    describe('`Signals.DEBARK_STAGE`', () => {
      it('is a string', () => {
        expect(Signals.DEBARK_STAGE)
          .to.be.a('string')
      })

      it('is `MOCK DEBARK_STAGE`', () => {
        expect(Signals.DEBARK_STAGE)
          .to.equal('MOCK DEBARK_STAGE')
      })
    })

    describe('`Signals.ALPHA_PATTERN`', () => {
      it('is a string', () => {
        expect(Signals.ALPHA_PATTERN)
          .to.be.a('string')
      })

      it('is `MOCK ALPHA_PATTERN`', () => {
        expect(Signals.ALPHA_PATTERN)
          .to.equal('MOCK ALPHA_PATTERN')
      })
    })

    describe('`Signals.OMEGA_PATTERN`', () => {
      it('is a string', () => {
        expect(Signals.OMEGA_PATTERN)
          .to.be.a('string')
      })

      it('is `MOCK OMEGA_PATTERN`', () => {
        expect(Signals.OMEGA_PATTERN)
          .to.equal('MOCK OMEGA_PATTERN')
      })
    })

    describe('`Signals.EMBARK_PATTERN`', () => {
      it('is a string', () => {
        expect(Signals.EMBARK_PATTERN)
          .to.be.a('string')
      })

      it('is `MOCK EMBARK_PATTERN`', () => {
        expect(Signals.EMBARK_PATTERN)
          .to.equal('MOCK EMBARK_PATTERN')
      })
    })

    describe('`Signals.DEBARK_PATTERN`', () => {
      it('is a string', () => {
        expect(Signals.DEBARK_PATTERN)
          .to.be.a('string')
      })

      it('is `MOCK DEBARK_PATTERN`', () => {
        expect(Signals.DEBARK_PATTERN)
          .to.equal('MOCK DEBARK_PATTERN')
      })
    })

    describe('`Signals.CONFIRM_PATTERN`', () => {
      it('is a string', () => {
        expect(Signals.CONFIRM_PATTERN)
          .to.be.a('string')
      })

      it('is `MOCK CONFIRM_PATTERN`', () => {
        expect(Signals.CONFIRM_PATTERN)
          .to.equal('MOCK CONFIRM_PATTERN')
      })
    })

    describe('`Signals.ENTER_ALPHA`', () => {
      it('is a string', () => {
        expect(Signals.ENTER_ALPHA)
          .to.be.a('string')
      })

      it('is `MOCK ENTER_ALPHA`', () => {
        expect(Signals.ENTER_ALPHA)
          .to.equal('MOCK ENTER_ALPHA')
      })
    })

    describe('`Signals.LEAVE_ALPHA`', () => {
      it('is a string', () => {
        expect(Signals.LEAVE_ALPHA)
          .to.be.a('string')
      })

      it('is `MOCK LEAVE_ALPHA`', () => {
        expect(Signals.LEAVE_ALPHA)
          .to.equal('MOCK LEAVE_ALPHA')
      })
    })

    describe('`Signals.CHANGE_ALPHA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_ALPHA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_ALPHA`', () => {
        expect(Signals.CHANGE_ALPHA)
          .to.equal('MOCK CHANGE_ALPHA')
      })
    })

    describe('`Signals.REMAIN_ALPHA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_ALPHA)
          .to.be.a('string')
      })

      it('is `MOCK REMAIN_ALPHA`', () => {
        expect(Signals.REMAIN_ALPHA)
          .to.equal('MOCK REMAIN_ALPHA')
      })
    })

    describe('`Signals.ENTER_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.ENTER_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK ENTER_OMEGA`', () => {
        expect(Signals.ENTER_OMEGA)
          .to.equal('MOCK ENTER_OMEGA')
      })
    })

    describe('`Signals.LEAVE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.LEAVE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK LEAVE_OMEGA`', () => {
        expect(Signals.LEAVE_OMEGA)
          .to.equal('MOCK LEAVE_OMEGA')
      })
    })

    describe('`Signals.CHANGE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_OMEGA`', () => {
        expect(Signals.CHANGE_OMEGA)
          .to.equal('MOCK CHANGE_OMEGA')
      })
    })

    describe('`Signals.REMAIN_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK REMAIN_OMEGA`', () => {
        expect(Signals.REMAIN_OMEGA)
          .to.equal('MOCK REMAIN_OMEGA')
      })
    })

    describe('`Signals.ENTER_ALPHA_ENTER_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.ENTER_ALPHA_ENTER_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK ENTER_ALPHA_ENTER_OMEGA`', () => {
        expect(Signals.ENTER_ALPHA_ENTER_OMEGA)
          .to.equal('MOCK ENTER_ALPHA_ENTER_OMEGA')
      })
    })

    describe('`Signals.LEAVE_ALPHA_LEAVE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.LEAVE_ALPHA_LEAVE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK LEAVE_ALPHA_LEAVE_OMEGA`', () => {
        expect(Signals.LEAVE_ALPHA_LEAVE_OMEGA)
          .to.equal('MOCK LEAVE_ALPHA_LEAVE_OMEGA')
      })
    })

    describe('`Signals.CHANGE_ALPHA_ENTER_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_ALPHA_ENTER_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_ALPHA_ENTER_OMEGA`', () => {
        expect(Signals.CHANGE_ALPHA_ENTER_OMEGA)
          .to.equal('MOCK CHANGE_ALPHA_ENTER_OMEGA')
      })
    })

    describe('`Signals.CHANGE_ALPHA_LEAVE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_ALPHA_LEAVE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_ALPHA_LEAVE_OMEGA`', () => {
        expect(Signals.CHANGE_ALPHA_LEAVE_OMEGA)
          .to.equal('MOCK CHANGE_ALPHA_LEAVE_OMEGA')
      })
    })

    describe('`Signals.REMAIN_ALPHA_ENTER_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_ALPHA_ENTER_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK REMAIN_ALPHA_ENTER_OMEGA`', () => {
        expect(Signals.REMAIN_ALPHA_ENTER_OMEGA)
          .to.equal('MOCK REMAIN_ALPHA_ENTER_OMEGA')
      })
    })

    describe('`Signals.REMAIN_ALPHA_LEAVE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_ALPHA_LEAVE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK REMAIN_ALPHA_LEAVE_OMEGA`', () => {
        expect(Signals.REMAIN_ALPHA_LEAVE_OMEGA)
          .to.equal('MOCK REMAIN_ALPHA_LEAVE_OMEGA')
      })
    })

    describe('`Signals.CHANGE_ALPHA_CHANGE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_ALPHA_CHANGE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_ALPHA_CHANGE_OMEGA`', () => {
        expect(Signals.CHANGE_ALPHA_CHANGE_OMEGA)
          .to.equal('MOCK CHANGE_ALPHA_CHANGE_OMEGA')
      })
    })

    describe('`Signals.CHANGE_ALPHA_REMAIN_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.CHANGE_ALPHA_REMAIN_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK CHANGE_ALPHA_REMAIN_OMEGA`', () => {
        expect(Signals.CHANGE_ALPHA_REMAIN_OMEGA)
          .to.equal('MOCK CHANGE_ALPHA_REMAIN_OMEGA')
      })
    })

    describe('`Signals.REMAIN_ALPHA_CHANGE_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_ALPHA_CHANGE_OMEGA)
          .to.be.a('string')
      })

      it('is `MOCK REMAIN_ALPHA_CHANGE_OMEGA`', () => {
        expect(Signals.REMAIN_ALPHA_CHANGE_OMEGA)
          .to.equal('MOCK REMAIN_ALPHA_CHANGE_OMEGA')
      })
    })

    describe('`Signals.REMAIN_ALPHA_REMAIN_OMEGA`', () => {
      it('is a string', () => {
        expect(Signals.REMAIN_ALPHA_REMAIN_OMEGA)
          .to.be.a('string')
      })

      it('is a `MOCK REMAIN_ALPHA_REMAIN_OMEGA`', () => {
        expect(Signals.REMAIN_ALPHA_REMAIN_OMEGA)
          .to.equal('MOCK REMAIN_ALPHA_REMAIN_OMEGA')
      })
    })

    describe('`Signals.EXCEPTION`', () => {
      it('is a string', () => {
        expect(Signals.EXCEPTION)
          .to.be.a('string')
      })

      it('is a `MOCK EXCEPTION`', () => {
        expect(Signals.EXCEPTION)
          .to.equal('MOCK EXCEPTION')
      })
    })

    describe('`Signals.FAILURE`', () => {
      it('is a number', () => {
        expect(Signals.FAILURE)
          .to.be.a('number')
      })

      it('is 100', () => {
        expect(Signals.FAILURE)
          .to.equal(100)
      })
    })

    describe('`Signals.SUCCESS`', () => {
      it('is a number', () => {
        expect(Signals.SUCCESS)
          .to.be.a('number')
      })

      it('is 101', () => {
        expect(Signals.SUCCESS)
          .to.equal(101)
      })
    })

    describe('`Signals.IN_PROGRESS`', () => {
      it('is a number', () => {
        expect(Signals.IN_PROGRESS)
          .to.be.a('number')
      })

      it('is 103', () => {
        expect(Signals.IN_PROGRESS)
          .to.equal(103)
      })
    })

    describe('`Signals.UNKNOWN`', () => {
      it('is a number', () => {
        expect(Signals.UNKNOWN)
          .to.be.a('number')
      })

      it('is 104', () => {
        expect(Signals.UNKNOWN)
          .to.equal(104)
      })
    })

    describe('`Signals.COMPLETE`', () => {
      it('is a number', () => {
        expect(Signals.COMPLETE)
          .to.be.a('number')
      })

      it('is 105', () => {
        expect(Signals.COMPLETE)
          .to.equal(105)
      })
    })
  })
})
