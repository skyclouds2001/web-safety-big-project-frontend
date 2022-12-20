/**
 * 景点
 */
export default interface ScenerySpot {
  /** 景点ID */
  id: number
  /** 景点名称 */
  name: string
  /** 景点描述 | 允许为空 */
  desc?: string
  /** 景点地点 | 格式-省市县 */
  area: string
  /** 景点创建时间戳 */
  createTimestamp: number
  /** 景点更新时间戳 */
  updateTimestamp: number
}
