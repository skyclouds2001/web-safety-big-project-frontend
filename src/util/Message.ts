import { ElMessage } from 'element-plus'

export const SuccessMessage = (msg: string): void => {
  ElMessage({
    message: msg,
    type: 'success',
    showClose: true,
    center: true,
  })
}

export const WarnMessage = (msg: string): void => {
  ElMessage({
    message: msg,
    type: 'warning',
    showClose: true,
    center: true,
  })
}

export const ErrorMessage = (msg: string): void => {
  ElMessage({
    message: msg,
    type: 'error',
    showClose: true,
    center: true,
  })
}

export const InfoMessage = (msg: string): void => {
  ElMessage({
    message: msg,
    type: 'info',
    showClose: true,
    center: true,
  })
}
