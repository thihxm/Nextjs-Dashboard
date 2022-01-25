import { useQuery } from 'react-query'

import { api } from '../api'

type User = {
  id: number
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<GetUsersResponse>('/users')

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        dateStyle: 'long',
      }),
    }
  })

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5,
  })
}
