import { atom } from 'jotai'
import { splitAtom } from 'jotai/utils'

const initialItems = [
  { text: 'Hello' },
  { text: 'World' },
]

export type TItem = typeof initialItems[number]

export const itemsAtom = atom<TItem[]>(initialItems)

// 使用 splitAtom 将 itemsAtom 分解为单独的原子数组。
// splitAtom(X) X 是要是一个 数组原子 atom 。

// 主要功能：将数组中的每一个元素转变为单独的 atom
export const itemAtomsAtom = splitAtom(itemsAtom)

// WritableAtom<
//   PrimitiveAtom<{text: string} | ({text: string} & {text: string})>[],
//   [SplitAtomAction<{text: string} | ({text: string} & {text: string})>],
//   void
// >
