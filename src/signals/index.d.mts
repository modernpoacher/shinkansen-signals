declare module '#signals/signals' {
  export const ALPHA: string
  export const OMEGA: string

  export const EMBARK: string
  export const DEBARK: string

  export const CONFIRM: string

  export const INDEX: string

  export const ALPHA_STAGE: string
  export const OMEGA_STAGE: string

  export const EMBARK_STAGE: string
  export const DEBARK_STAGE: string

  export const CONFIRM_STAGE: string

  export const ALPHA_PATTERN: string
  export const OMEGA_PATTERN: string

  export const EMBARK_PATTERN: string
  export const DEBARK_PATTERN: string

  export const CONFIRM_PATTERN: string

  export const ENTER_ALPHA: string
  export const LEAVE_ALPHA: string

  export const CHANGE_ALPHA: string
  export const REMAIN_ALPHA: string

  export const ENTER_OMEGA: string
  export const LEAVE_OMEGA: string

  export const CHANGE_OMEGA: string
  export const REMAIN_OMEGA: string

  export const ENTER_ALPHA_ENTER_OMEGA: string
  export const LEAVE_ALPHA_LEAVE_OMEGA: string

  export const CHANGE_ALPHA_ENTER_OMEGA: string
  export const CHANGE_ALPHA_LEAVE_OMEGA: string

  export const REMAIN_ALPHA_ENTER_OMEGA: string
  export const REMAIN_ALPHA_LEAVE_OMEGA: string

  export const CHANGE_ALPHA_CHANGE_OMEGA: string
  export const CHANGE_ALPHA_REMAIN_OMEGA: string

  export const REMAIN_ALPHA_CHANGE_OMEGA: string
  export const REMAIN_ALPHA_REMAIN_OMEGA: string

  export const EXCEPTION: string

  export const FAILURE: number
  export const SUCCESS: number
  export const IN_PROGRESS: number
  export const UNKNOWN: number
  export const COMPLETE: number

  const signals: {
    ALPHA: string
    OMEGA: string

    EMBARK: string
    DEBARK: string

    CONFIRM: string

    INDEX: string

    ALPHA_STAGE: string
    OMEGA_STAGE: string

    EMBARK_STAGE: string
    DEBARK_STAGE: string

    CONFIRM_STAGE: string

    ALPHA_PATTERN: string
    OMEGA_PATTERN: string

    EMBARK_PATTERN: string
    DEBARK_PATTERN: string

    CONFIRM_PATTERN: string

    ENTER_ALPHA: string
    LEAVE_ALPHA: string

    CHANGE_ALPHA: string
    REMAIN_ALPHA: string

    ENTER_OMEGA: string
    LEAVE_OMEGA: string

    CHANGE_OMEGA: string
    REMAIN_OMEGA: string

    ENTER_ALPHA_ENTER_OMEGA: string
    LEAVE_ALPHA_LEAVE_OMEGA: string

    CHANGE_ALPHA_ENTER_OMEGA: string
    CHANGE_ALPHA_LEAVE_OMEGA: string

    REMAIN_ALPHA_ENTER_OMEGA: string
    REMAIN_ALPHA_LEAVE_OMEGA: string

    CHANGE_ALPHA_CHANGE_OMEGA: string
    CHANGE_ALPHA_REMAIN_OMEGA: string

    REMAIN_ALPHA_CHANGE_OMEGA: string
    REMAIN_ALPHA_REMAIN_OMEGA: string

    EXCEPTION: string

    FAILURE: number
    SUCCESS: number
    IN_PROGRESS: number
    UNKNOWN: number
    COMPLETE: number
  }

  export default signals
}

declare module 'shinkansen-signals/signals' {
  export { default } from '#signals/signals'
}
