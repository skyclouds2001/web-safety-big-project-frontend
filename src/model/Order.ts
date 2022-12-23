/**
 * 订单
 */
export default interface Order {
  /** 订单ID */
  id: number
  /** 预定日期 | 格式YYYYMMSS */
  time: number
  /** 所属门票ID */
  ticketId: number
  /** 购买门票数量 */
  amount: number
  /** 所属客户ID */
  customerId: number
  /** 订单总金额 */
  cost: number
  /** 订单备注 | 允许为空 */
  note: string
  /** 订单创建时间戳 */
  createTimestamp: number
  /** 订单更新时间戳 */
  updateTimestamp: number
}
