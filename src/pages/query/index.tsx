import { useAtom } from 'jotai'

import { userQueryAtom } from '@/atoms'

export default function QueryPage() {
  const [{data, isPending, isError}] = useAtom(userQueryAtom)

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  return (
    <div className={'p-2'}>
      <div className={'flex flex-col bg-blue-100'}>
        <p className={'font-semibold'}>atom with query ----- GET :</p>
        <p>{JSON.stringify(data, null, 2)}</p>
      </div>
    </div>
  )
}
