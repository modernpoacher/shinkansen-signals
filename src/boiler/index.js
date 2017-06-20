import {
  BOILER,
  boiler
} from './boiler'

export class Boiler {
  static get ALPHA () {
    return boiler.get('ALPHA')
  }

  static get OMEGA () {
    return boiler.get('OMEGA')
  }

  static get EMBARK () {
    return boiler.get('EMBARK')
  }

  static get DEBARK () {
    return boiler.get('DEBARK')
  }

  static get INDEX () {
    return boiler.get('INDEX')
  }

  static get ENTER_ALPHA () {
    return boiler.get('ENTER_ALPHA')
  }

  static get LEAVE_ALPHA () {
    return boiler.get('LEAVE_ALPHA')
  }

  static get CHANGE_ALPHA () {
    return boiler.get('CHANGE_ALPHA')
  }

  static get REMAIN_ALPHA () {
    return boiler.get('REMAIN_ALPHA')
  }

  static get ENTER_OMEGA () {
    return boiler.get('ENTER_OMEGA')
  }

  static get LEAVE_OMEGA () {
    return boiler.get('LEAVE_OMEGA')
  }

  static get CHANGE_OMEGA () {
    return boiler.get('CHANGE_OMEGA')
  }

  static get REMAIN_OMEGA () {
    return boiler.get('REMAIN_OMEGA')
  }

  static get ALPHA_PATTERN () {
    return boiler.get('ALPHA_PATTERN')
  }

  static get OMEGA_PATTERN () {
    return boiler.get('OMEGA_PATTERN')
  }

  static get EMBARK_STAGE () {
    return boiler.get('EMBARK_STAGE')
  }

  static get DEBARK_STAGE () {
    return boiler.get('DEBARK_STAGE')
  }

  static get EMBARK_PATTERN () {
    return boiler.get('EMBARK_PATTERN')
  }

  static get DEBARK_PATTERN () {
    return boiler.get('DEBARK_PATTERN')
  }

  static get ENTER_ALPHA_ENTER_OMEGA () {
    return boiler.get('ENTER_ALPHA_ENTER_OMEGA')
  }

  static get LEAVE_ALPHA_LEAVE_OMEGA () {
    return boiler.get('LEAVE_ALPHA_LEAVE_OMEGA')
  }

  static get CHANGE_ALPHA_ENTER_OMEGA () {
    return boiler.get('CHANGE_ALPHA_ENTER_OMEGA')
  }

  static get CHANGE_ALPHA_LEAVE_OMEGA () {
    return boiler.get('CHANGE_ALPHA_LEAVE_OMEGA')
  }

  static get REMAIN_ALPHA_ENTER_OMEGA () {
    return boiler.get('REMAIN_ALPHA_ENTER_OMEGA')
  }

  static get REMAIN_ALPHA_LEAVE_OMEGA () {
    return boiler.get('REMAIN_ALPHA_LEAVE_OMEGA')
  }

  static get CHANGE_ALPHA_CHANGE_OMEGA () {
    return boiler.get('CHANGE_ALPHA_CHANGE_OMEGA')
  }

  static get CHANGE_ALPHA_REMAIN_OMEGA () {
    return boiler.get('CHANGE_ALPHA_REMAIN_OMEGA')
  }

  static get REMAIN_ALPHA_CHANGE_OMEGA () {
    return boiler.get('REMAIN_ALPHA_CHANGE_OMEGA')
  }

  static get REMAIN_ALPHA_REMAIN_OMEGA () {
    return boiler.get('REMAIN_ALPHA_REMAIN_OMEGA')
  }

  static get EXCEPTION () {
    return boiler.get('EXCEPTION')
  }

  static get FAILURE () {
    return boiler.get('FAILURE')
  }

  static get SUCCESS () {
    return boiler.get('SUCCESS')
  }

  static get IN_PROGRESS () {
    return boiler.get('IN_PROGRESS')
  }

  static get NO_DECISION () {
    return boiler.get('NO_DECISION')
  }

  static get COMPLETE () {
    return boiler.get('COMPLETE')
  }

  static get PENDING () {
    return boiler.get('PENDING')
  }

  static stoke (values) {
    Reflect
      .ownKeys(values)
      .forEach((key) => {
        if (Reflect.has(BOILER, key)) {
          boiler.set(key, Reflect.get(values, key))
        }
      })
  }
}
