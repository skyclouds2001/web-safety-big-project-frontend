/**
 * 门票
 */
export default interface Ticket {
  /** 门票ID */
  id: number
  /** 门票名称 */
  name: string
  /** 门票描述 | 允许为空 */
  desc: string
  /** 门票类型 | 0-成人票 1-儿童票 2-其他 */
  type: number
  /** 门票价格 */
  price: number
  /** 所属景点ID */
  scenerySpotId: number
  /** 门票创建时间戳 */
  createTimestamp: number
  /** 门票更新时间戳 */
  updateTimestamp: number
}
