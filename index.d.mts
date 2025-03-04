declare global {
  namespace SignalsTypes {
    export namespace Signals {

      export type IndexType = string

      export type AlphaType = string
      export type OmegaType = string
      export type EmbarkType = string
      export type DebarkType = string

      export type ConfirmType = string

      export type AlphaStageType = string
      export type OmegaStageType = string
      export type EmbarkStageType = string
      export type DebarkStageType = string
      export type ConfirmStageType = string

      export type AlphaPatternType = string
      export type OmegaPatternType = string
      export type EmbarkPatternType = string
      export type DebarkPatternType = string
      export type ConfirmPatternType = string

      export type EnterAlphaType = string
      export type LeaveAlphaType = string
      export type ChangeAlphaType = string
      export type RemainAlphaType = string

      export type EnterOmegaType = string
      export type LeaveOmegaType = string
      export type ChangeOmegaType = string
      export type RemainOmegaType = string

      export type EnterAlphaEnterOmegaType = string
      export type LeaveAlphaLeaveOmegaType = string
      export type ChangeAlphaEnterOmegaType = string
      export type ChangeAlphaLeaveOmegaType = string
      export type RemainAlphaEnterOmegaType = string
      export type RemainAlphaLeaveOmegaType = string
      export type ChangeAlphaChangeOmegaType = string
      export type ChangeAlphaRemainOmegaType = string
      export type RemainAlphaChangeOmegaType = string
      export type RemainAlphaRemainOmegaType = string

      export type ExceptionType = string

      export type FailureType = number
      export type SuccessType = number
      export type InProgressType = number
      export type UnknownType = number
      export type CompleteType = number

      export interface SignalsType {
        INDEX: IndexType

        ALPHA: AlphaType
        OMEGA: OmegaType
        EMBARK: EmbarkType
        DEBARK: DebarkType

        CONFIRM: ConfirmType

        ALPHA_STAGE: AlphaStageType
        OMEGA_STAGE: OmegaStageType
        EMBARK_STAGE: EmbarkStageType
        DEBARK_STAGE: DebarkStageType
        CONFIRM_STAGE: ConfirmStageType

        ALPHA_PATTERN: AlphaPatternType
        OMEGA_PATTERN: OmegaPatternType
        EMBARK_PATTERN: EmbarkPatternType
        DEBARK_PATTERN: DebarkPatternType
        CONFIRM_PATTERN: ConfirmPatternType

        ENTER_ALPHA: EnterAlphaType
        LEAVE_ALPHA: LeaveAlphaType
        CHANGE_ALPHA: ChangeAlphaType
        REMAIN_ALPHA: RemainAlphaType

        ENTER_OMEGA: EnterOmegaType
        LEAVE_OMEGA: LeaveOmegaType
        CHANGE_OMEGA: ChangeOmegaType
        REMAIN_OMEGA: RemainOmegaType

        ENTER_ALPHA_ENTER_OMEGA: EnterAlphaEnterOmegaType
        LEAVE_ALPHA_LEAVE_OMEGA: LeaveAlphaLeaveOmegaType
        CHANGE_ALPHA_ENTER_OMEGA: ChangeAlphaEnterOmegaType
        CHANGE_ALPHA_LEAVE_OMEGA: ChangeAlphaLeaveOmegaType
        REMAIN_ALPHA_ENTER_OMEGA: RemainAlphaEnterOmegaType
        REMAIN_ALPHA_LEAVE_OMEGA: RemainAlphaLeaveOmegaType
        CHANGE_ALPHA_CHANGE_OMEGA: ChangeAlphaChangeOmegaType
        CHANGE_ALPHA_REMAIN_OMEGA: ChangeAlphaRemainOmegaType
        REMAIN_ALPHA_CHANGE_OMEGA: RemainAlphaChangeOmegaType
        REMAIN_ALPHA_REMAIN_OMEGA: RemainAlphaRemainOmegaType

        EXCEPTION: ExceptionType

        FAILURE: FailureType
        SUCCESS: SuccessType
        IN_PROGRESS: InProgressType
        UNKNOWN: UnknownType
        COMPLETE: CompleteType
      }
    }
  }
}

export {}
