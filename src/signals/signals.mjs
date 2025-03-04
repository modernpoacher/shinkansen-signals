/**
 *  @typedef {SignalsTypes.Signals.IndexType} IndexType
 *
 *  @typedef {SignalsTypes.Signals.AlphaType} AlphaType
 *  @typedef {SignalsTypes.Signals.OmegaType} OmegaType
 *  @typedef {SignalsTypes.Signals.EmbarkType} EmbarkType
 *  @typedef {SignalsTypes.Signals.DebarkType} DebarkType
 *  @typedef {SignalsTypes.Signals.ConfirmType} ConfirmType
 *
 *  @typedef {SignalsTypes.Signals.AlphaStageType} AlphaStageType
 *  @typedef {SignalsTypes.Signals.OmegaStageType} OmegaStageType
 *  @typedef {SignalsTypes.Signals.EmbarkStageType} EmbarkStageType
 *  @typedef {SignalsTypes.Signals.DebarkStageType} DebarkStageType
 *  @typedef {SignalsTypes.Signals.ConfirmStageType} ConfirmStageType
 *
 *  @typedef {SignalsTypes.Signals.AlphaPatternType} AlphaPatternType
 *  @typedef {SignalsTypes.Signals.OmegaPatternType} OmegaPatternType
 *  @typedef {SignalsTypes.Signals.EmbarkPatternType} EmbarkPatternType
 *  @typedef {SignalsTypes.Signals.DebarkPatternType} DebarkPatternType
 *  @typedef {SignalsTypes.Signals.ConfirmPatternType} ConfirmPatternType
 *
 *  @typedef {SignalsTypes.Signals.EnterAlphaType} EnterAlphaType
 *  @typedef {SignalsTypes.Signals.LeaveAlphaType} LeaveAlphaType
 *  @typedef {SignalsTypes.Signals.ChangeAlphaType} ChangeAlphaType
 *  @typedef {SignalsTypes.Signals.RemainAlphaType} RemainAlphaType
 *
 *  @typedef {SignalsTypes.Signals.EnterOmegaType} EnterOmegaType
 *  @typedef {SignalsTypes.Signals.LeaveOmegaType} LeaveOmegaType
 *  @typedef {SignalsTypes.Signals.ChangeOmegaType} ChangeOmegaType
 *  @typedef {SignalsTypes.Signals.RemainOmegaType} RemainOmegaType
 *
 *  @typedef {SignalsTypes.Signals.EnterAlphaEnterOmegaType} EnterAlphaEnterOmegaType
 *  @typedef {SignalsTypes.Signals.LeaveAlphaLeaveOmegaType} LeaveAlphaLeaveOmegaType
 *  @typedef {SignalsTypes.Signals.ChangeAlphaEnterOmegaType} ChangeAlphaEnterOmegaType
 *  @typedef {SignalsTypes.Signals.ChangeAlphaLeaveOmegaType} ChangeAlphaLeaveOmegaType
 *  @typedef {SignalsTypes.Signals.RemainAlphaEnterOmegaType} RemainAlphaEnterOmegaType
 *  @typedef {SignalsTypes.Signals.RemainAlphaLeaveOmegaType} RemainAlphaLeaveOmegaType
 *  @typedef {SignalsTypes.Signals.ChangeAlphaChangeOmegaType} ChangeAlphaChangeOmegaType
 *  @typedef {SignalsTypes.Signals.ChangeAlphaRemainOmegaType} ChangeAlphaRemainOmegaType
 *  @typedef {SignalsTypes.Signals.RemainAlphaChangeOmegaType} RemainAlphaChangeOmegaType
 *  @typedef {SignalsTypes.Signals.RemainAlphaRemainOmegaType} RemainAlphaRemainOmegaType
 *
 *  @typedef {SignalsTypes.Signals.ExceptionType} ExceptionType
 *
 *  @typedef {SignalsTypes.Signals.FailureType} FailureType
 *  @typedef {SignalsTypes.Signals.SuccessType} SuccessType
 *  @typedef {SignalsTypes.Signals.InProgressType} InProgressType
 *  @typedef {SignalsTypes.Signals.UnknownType} UnknownType
 *  @typedef {SignalsTypes.Signals.CompleteType} CompleteType
 *
 *  @typedef {SignalsTypes.Signals.SignalsType} SignalsType
 */

import debug from 'debug'

const log = debug('shinkansen-signals/signals/signals')

log('`shinkansen` is awake')

/**
 *  @type {IndexType}
 */
export const INDEX = 'INDEX'

/**
 *  @type {AlphaType}
 */
export const ALPHA = 'alpha'

/**
 *  @type {OmegaType}
 */
export const OMEGA = 'omega'

/**
 *  @type {EmbarkType}
 */
export const EMBARK = 'embark'

/**
 *  @type {DebarkType}
 */
export const DEBARK = 'debark'

/**
 *  @type {ConfirmType}
 */
export const CONFIRM = 'confirm'

/**
 *  In practice, `ALPHA_STAGE` and `OMEGA_STAGE` would not be used where routes
 *  are constructed dynamically, while `EMBARK_STAGE` and `DEBARK_STAGE` expect
 *  to be configured
 *
 *    ALPHA_STAGE = 'alpha-stage'
 *    OMEGA_STAGE = 'omega-stage'
 *
 *    ALPHA_PATTERN = '/:alpha'
 *    OMEGA_PATTERN = '/:alpha/:omega'
 *
 *    ALPHA_ROUTE = '/alpha-stage'
 *    OMEGA_ROUTE = '/alpha-stage/omega-stage'
 *
 *    EMBARK_STAGE = 'embark-stage'
 *    DEBARK_STAGE = 'debark-stage'
 *
 *    EMBARK_PATTERN = '/:embark'
 *    DEBARK_PATTERN = '/:debark'
 *
 *    EMBARK_ROUTE = '/embark-stage'
 *    DEBARK_ROUTE = '/debark-stage'
 */

/**
 *  @type {AlphaStageType}
 */
export const ALPHA_STAGE = 'alpha-stage'

/**
 *  @type {OmegaStageType}
 */
export const OMEGA_STAGE = 'omega-stage'

/**
 *  @type {EmbarkStageType}
 */
export const EMBARK_STAGE = 'embark-stage'

/**
 *  @type {DebarkStageType}
 */
export const DEBARK_STAGE = 'debark-stage'

/**
 *  @type {ConfirmStageType}
 */
export const CONFIRM_STAGE = 'confirm-stage'

/**
 *  @type {AlphaPatternType}
 */
export const ALPHA_PATTERN = '/:alpha'

/**
 *  @type {OmegaPatternType}
 */
export const OMEGA_PATTERN = '/:alpha/:omega'

/**
 *  @type {EmbarkPatternType}
 */
export const EMBARK_PATTERN = '/:embark'

/**
 *  @type {DebarkPatternType}
 */
export const DEBARK_PATTERN = '/:debark'

/**
 *  @type {ConfirmPatternType}
 */
export const CONFIRM_PATTERN = '/:confirm'

/**
 *  @type {EnterAlphaType}
 */
export const ENTER_ALPHA = 'ENTER_ALPHA'

/**
 *  @type {LeaveAlphaType}
 */
export const LEAVE_ALPHA = 'LEAVE_ALPHA'

/**
 *  @type {ChangeAlphaType}
 */
export const CHANGE_ALPHA = 'CHANGE_ALPHA'

/**
 *  @type {RemainAlphaType}
 */
export const REMAIN_ALPHA = 'REMAIN_ALPHA'

/**
 *  @type {EnterOmegaType}
 */
export const ENTER_OMEGA = 'ENTER_OMEGA'

/**
 *  @type {LeaveOmegaType}
 */
export const LEAVE_OMEGA = 'LEAVE_OMEGA'

/**
 *  @type {ChangeOmegaType}
 */
export const CHANGE_OMEGA = 'CHANGE_OMEGA'

/**
 *  @type {RemainOmegaType}
 */
export const REMAIN_OMEGA = 'REMAIN_OMEGA'

/**
 *  @type {EnterAlphaEnterOmegaType}
 */
export const ENTER_ALPHA_ENTER_OMEGA = 'ENTER_ALPHA_ENTER_OMEGA'

/**
 *  @type {LeaveAlphaLeaveOmegaType}
 */
export const LEAVE_ALPHA_LEAVE_OMEGA = 'LEAVE_ALPHA_LEAVE_OMEGA'

/**
 *  @type {ChangeAlphaEnterOmegaType}
 */
export const CHANGE_ALPHA_ENTER_OMEGA = 'CHANGE_ALPHA_ENTER_OMEGA'

/**
 *  @type {ChangeAlphaLeaveOmegaType}
 */
export const CHANGE_ALPHA_LEAVE_OMEGA = 'CHANGE_ALPHA_LEAVE_OMEGA'

/**
 *  @type {RemainAlphaEnterOmegaType}
 */
export const REMAIN_ALPHA_ENTER_OMEGA = 'REMAIN_ALPHA_ENTER_OMEGA'

/**
 *  @type {RemainAlphaLeaveOmegaType}
 */
export const REMAIN_ALPHA_LEAVE_OMEGA = 'REMAIN_ALPHA_LEAVE_OMEGA'

/**
 *  @type {ChangeAlphaChangeOmegaType}
 */
export const CHANGE_ALPHA_CHANGE_OMEGA = 'CHANGE_ALPHA_CHANGE_OMEGA'

/**
 *  @type {ChangeAlphaRemainOmegaType}
 */
export const CHANGE_ALPHA_REMAIN_OMEGA = 'CHANGE_ALPHA_REMAIN_OMEGA'

/**
 *  @type {RemainAlphaChangeOmegaType}
 */
export const REMAIN_ALPHA_CHANGE_OMEGA = 'REMAIN_ALPHA_CHANGE_OMEGA'

/**
 *  @type {RemainAlphaRemainOmegaType}
 */
export const REMAIN_ALPHA_REMAIN_OMEGA = 'REMAIN_ALPHA_REMAIN_OMEGA'

/**
 *  @type {ExceptionType}
 */
export const EXCEPTION = 'EXCEPTION'

/**
 *  @type {FailureType}
 */
export const FAILURE = 0

/**
 *  @type {SuccessType}
 */
export const SUCCESS = 1

/**
 *  @type {InProgressType}
 */
export const IN_PROGRESS = 3

/**
 *  @type {UnknownType}
 */
export const UNKNOWN = 4

/**
 *  @type {CompleteType}
 */
export const COMPLETE = 5

/**
 *  @type {SignalsType}
 */
const Signals = {
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
}

export default Signals
