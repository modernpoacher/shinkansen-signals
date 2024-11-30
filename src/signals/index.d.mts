declare module '#signals/signals' {
  const signals: Record<string, string>

  export default signals
}

declare module 'shinkansen-signals/signals' {
  export { default } from '#signals/signals'
}
