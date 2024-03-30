import { useAtomValue, useSetAtom } from 'jotai'

import { readonlyPriceAtom, writeOnlyPriceAtom } from '@/atoms'

export default function CorePage() {
  const readonlyPrice= useAtomValue(readonlyPriceAtom) // 读取 readonlyPriceAtom 受控于 priceAtom 原子值的状态

  const setWriteOnlyPriceAtom = useSetAtom(writeOnlyPriceAtom) // 读取 writeOnlyPriceAtom 的更新函数

  return (
    <div className={'flex flex-col gap-2'}>
      <p>{readonlyPrice}</p>

      <button
        className={'bg-blue-500 text-white px-4 py-2 rounded-lg w-fit'}
        onClick={() => setWriteOnlyPriceAtom({ type: 'add', data: 10})}
      >
        Add
      </button>
      core page
    </div>
  )
}
