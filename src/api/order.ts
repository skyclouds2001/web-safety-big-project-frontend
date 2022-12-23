import instance from '@/network'
import type RequestResult from '@/model/RequestResult'
import type Order from '@/model/Order'

export const getSingleOrder = async (id: number): Promise<RequestResult<Order>> => (await instance.get(`/order/${id}`)).data

export const getAllOrder = async (): Promise<RequestResult<Order[]>> => (await instance.get('/order')).data

export const addOrder = async (order: Order): Promise<RequestResult<null>> => (await instance.post('/order', order)).data

export const updateOrder = async (order: Order): Promise<RequestResult<null>> => (await instance.put('/order', order)).data

export const removeOrder = async (id: number): Promise<RequestResult<null>> => (await instance.delete('/order', { params: { id } })).data
