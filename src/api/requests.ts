import { useQuery } from '@tanstack/react-query'
import api from './api.service'
import { getUserDetailEndpoint, getUsersEndpoint } from './endpoints.'

type User = {
  id: string
  name: string
  email: string
}

const getUsers = async () => {
  const result = await api.get(getUsersEndpoint())
  return result.data.data?.data
}

export const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}

const getUserDetail = async (userId: string) => {
  const result = await api.get(getUserDetailEndpoint(userId))
  console.log(result)
  return result.data.data?.data?.[0]
}

export const useGetUserDetail = (userId: string) => {
  return useQuery<User>({
    queryKey: ['users', userId],
    queryFn: () => getUserDetail(userId),
  })
}
