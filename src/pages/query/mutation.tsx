import { useAtom } from 'jotai'

import { postsMutationAtom } from '@/atoms'

export default function MutationPage() {
  const [{ mutate, status }] = useAtom(postsMutationAtom)

  return (
    <div>
      <p>{JSON.stringify(status, null, 2)}</p>

      <button
        className={'bg-blue-500 text-white p-2 rounded'}
        onClick={() => mutate({title: 'foo'})}
      >
        click
      </button>
    </div>
  )
}
