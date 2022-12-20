export default interface RequestResult<T = unknown> {
  success: boolean
  code: number
  message: string
  data: T
}
