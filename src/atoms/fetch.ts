import { atom } from 'jotai'

export type TUser = {
  id: number
  name: string
  phone: string
  username: string
  website: string
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export const userIdAtom = atom<number>(1)

export const userAtom = atom<Promise<TUser>>(async (get) => {
  const id = get(userIdAtom)

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return await response.json()
})



