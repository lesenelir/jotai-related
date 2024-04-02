import { useAtom, useAtomValue } from 'jotai'

import { readWriteUserLevelAtom, userScoreAtom } from '@/atoms'

export default function Page() {
  const userScore = useAtomValue(userScoreAtom)
  const [userLevel, setUserLevel] = useAtom(readWriteUserLevelAtom)

  return (
    <div className={'p-2 flex flex-col gap-2'}>
      <p>{userScore}</p>
      <p>{userLevel}</p>

      <button
        className={'w-fit bg-blue-500 text-white px-4 py-2 rounded-lg'}
        onClick={() => setUserLevel('+')}
      >
        +
      </button>

      <button
        className={'w-fit bg-blue-500 text-white px-4 py-2 rounded-lg'}
        onClick={() => setUserLevel('-')}
      >
        -
      </button>
    </div>
  )
}
