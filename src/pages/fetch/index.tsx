import { Suspense } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import { userAtom, userIdAtom } from '@/atoms'

function User() {
  const user = useAtomValue(userAtom)

  return (
    <>
      {user.name}
    </>
  )
}

export default function FetchPage() {
  const setUserId = useSetAtom(userIdAtom)

  return (
    <div className={'flex flex-col gap-2 p-2'}>
      <h1>Fetch Page</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <User/>
      </Suspense>

      <button
        className={'bg-blue-500 text-white p-2 rounded-lg w-fit'}
        onClick={() => setUserId(prev => prev + 1)}
      >
        Add
      </button>

    </div>
  )
}
