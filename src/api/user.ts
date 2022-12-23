import instance from '@/network'
import type RequestResult from '@/model/RequestResult'
import type User from '@/model/User'

export const getSingleUser = async (id: number): Promise<RequestResult<User>> => (await instance.get(`/user/${id}`)).data

export const getAllUser = async (): Promise<RequestResult<User[]>> => (await instance.get('/user')).data

export const addUser = async (user: User): Promise<RequestResult<null>> => (await instance.post('/user', user)).data

export const updateUser = async (user: User): Promise<RequestResult<null>> => (await instance.put('/user', user)).data

export const removeUser = async (id: number): Promise<RequestResult<null>> => (await instance.delete('/user', { params: { id } })).data
