import instance from '@/network'
import type RequestResult from '@/model/RequestResult'
import type ScenerySpot from '@/model/ScenerySpot'

export const getSingleScenerySpot = async (id: number): Promise<RequestResult<ScenerySpot>> => (await instance.get(`/scenery-spot/${id}`)).data

export const getAllScenerySpot = async (): Promise<RequestResult<ScenerySpot[]>> => (await instance.get('/scenery-spot')).data

export const addScenerySpot = async (scenerySpot: ScenerySpot): Promise<RequestResult<null>> => (await instance.post('/scenery-spot', scenerySpot)).data

export const updateScenerySpot = async (scenerySpot: ScenerySpot): Promise<RequestResult<null>> => (await instance.put('/scenery-spot', scenerySpot)).data

export const removeScenerySpot = async (id: number): Promise<RequestResult<null>> => (await instance.delete('/scenery-spot', { params: { id } })).data
