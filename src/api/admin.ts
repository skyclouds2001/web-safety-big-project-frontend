import instance from '@/network'
import type RequestResult from '@/model/RequestResult'

export const useLogin = async (phone: string, password: string): Promise<RequestResult<null>> =>
  (
    await instance.post(
      '/admin/login',
      {
        phone,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
  ).data

export const resetPassword = async (id: number, phone: string, oldPassword: string, newPassword: string): Promise<RequestResult<null>> =>
  (
    await instance.post(
      '/admin/reset',
      {
        id,
        phone,
        oldPassword,
        newPassword,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
  ).data
