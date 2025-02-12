declare module '#signals/signals' {
  interface signals {
    ALPHA: string,
    OMEGA: string,

    EMBARK: string,
    DEBARK: string,

    CONFIRM: string,

    INDEX: string,

    ALPHA_STAGE: string,
    OMEGA_STAGE: string,

    EMBARK_STAGE: string,
    DEBARK_STAGE: string,

    CONFIRM_STAGE: string,

    ALPHA_PATTERN: string,
    OMEGA_PATTERN: string,

    EMBARK_PATTERN: string,
    DEBARK_PATTERN: string,

    CONFIRM_PATTERN: string,

    ENTER_ALPHA: string,
    LEAVE_ALPHA: string,

    CHANGE_ALPHA: string,
    REMAIN_ALPHA: string,

    ENTER_OMEGA: string,
    LEAVE_OMEGA: string,

    CHANGE_OMEGA: string,
    REMAIN_OMEGA: string,

    ENTER_ALPHA_ENTER_OMEGA: string,
    LEAVE_ALPHA_LEAVE_OMEGA: string,

    CHANGE_ALPHA_ENTER_OMEGA: string,
    CHANGE_ALPHA_LEAVE_OMEGA: string,

    REMAIN_ALPHA_ENTER_OMEGA: string,
    REMAIN_ALPHA_LEAVE_OMEGA: string,

    CHANGE_ALPHA_CHANGE_OMEGA: string,
    CHANGE_ALPHA_REMAIN_OMEGA: string,

    REMAIN_ALPHA_CHANGE_OMEGA: string,
    REMAIN_ALPHA_REMAIN_OMEGA: string,

    EXCEPTION: string,

    FAILURE: number,
    SUCCESS: number,
    IN_PROGRESS: number,
    UNKNOWN: number,
    COMPLETE: number
  }

  export default signals
}

declare module 'shinkansen-signals/signals' {
  export type { default } from '#signals/signals'
}
