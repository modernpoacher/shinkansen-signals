declare module 'shinkansen-signals/signals' {
  const signals: Record<string, string>

  export default signals
}

declare module 'shinkansen-signals' {
  export { default as Signals } from 'shinkansen-signals/signals'
}
