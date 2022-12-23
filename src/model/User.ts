/**
 * 用户
 */
export default interface User {
  /** 用户ID */
  id: number
  /** 用户姓名 */
  name: string
  /** 用户性别 | 0-男 1-女 | 允许为空 */
  sex: number
  /** 用户出生日期 | 允许为空 */
  birth: string
  /** 用户电话号码 */
  phone: string
  /** 用户个人简介 | 允许为空 */
  desc: string
  /** 用户邮箱 | 允许为空 */
  email: string
  /** 用户身份证号码 */
  identity: string
  /** 用户居住地址 | 允许为空 */
  address: string
  /** 用户类型 0-普通用户 1-管理员 */
  type: number
  /** 账号昵称 */
  nickname: string
  /** 账号密码 */
  password: string
  /** 客户创建时间戳 */
  createTimestamp: number
  /** 客户更新时间戳 */
  updateTimestamp: number
}
