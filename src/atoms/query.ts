import { atom } from 'jotai'
import { atomWithInfiniteQuery, atomWithMutation, atomWithQuery } from 'jotai-tanstack-query'

import { TUser } from '@/atoms/fetch.ts'

export const idAtom = atom<number>(1)

// return an object with the query and the variables
export const userQueryAtom = atomWithQuery((get) => ({
  queryKey: ['user', get(idAtom)],
  queryFn: async (): Promise<TUser> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${get(idAtom)}`)
    return response.json()
  }
}))

export const postsInfiniteQueryAtom = atomWithInfiniteQuery(() => ({
  queryKey: ['posts'],
  queryFn: async ({pageParam}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`)
    return response.json()
  },
  getNextPageParam: (_lastPage, _allPages, lastPageParam) => lastPageParam + 1,
  initialPageParam: 1
}))


// mutation
export const postsMutationAtom = atomWithMutation(() => ({
  mutationKey: ['posts'],
  mutationFn: async ({title}: {title: string}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        title,
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, options)
    return await response.json()
  }
}))




