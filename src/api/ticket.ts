import instance from '@/network'
import type RequestResult from '@/model/RequestResult'
import type Ticket from '@/model/Ticket'

export const getSingleTicket = async (id: number): Promise<RequestResult<Ticket>> => (await instance.get(`/ticket/${id}`)).data

export const getAllTicket = async (): Promise<RequestResult<Ticket[]>> => (await instance.get('/ticket')).data

export const addTicket = async (ticket: Ticket): Promise<RequestResult<null>> => (await instance.post('/ticket', ticket)).data

export const updateTicket = async (ticket: Ticket): Promise<RequestResult<null>> => (await instance.put('/ticket', ticket)).data

export const removeTicket = async (id: number): Promise<RequestResult<null>> => (await instance.delete('/ticket', { params: { id } })).data
