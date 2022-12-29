const userSexes: Array<{
  label: string
  value: number
}> = [
  {
    label: '保密',
    value: -1,
  },
  {
    label: '男',
    value: 0,
  },
  {
    label: '女',
    value: 1,
  },
]

const userTypes: Array<{
  label: string
  value: number
}> = [
  {
    label: '普通用户',
    value: 0,
  },
  {
    label: '管理员',
    value: 1,
  },
]

export { userTypes, userSexes }
