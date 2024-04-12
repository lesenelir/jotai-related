import { DevTools } from 'jotai-devtools'
import { PrimitiveAtom, useAtom, useAtomValue } from 'jotai'

import { itemAtomsAtom, type TItem } from '@/atoms/split.ts'

function ItemList() {
  const itemAtoms = useAtomValue(itemAtomsAtom)

  return (
    <div>
      {
        itemAtoms.map((itemAtom, index) => (
          <div key={index} className={'p-2 bg-gray-100 rounded-lg'}>
            <Item itemAtom={itemAtom}/>
          </div>
        ))
      }
    </div>
  )
}

// props 是一个 atom
function Item({ itemAtom }: { itemAtom: PrimitiveAtom<TItem> }) {
  const [item, setItem] = useAtom(itemAtom)

  return (
    <>
      <input
        type="text"
        value={item.text}
        onChange={(e) => setItem({ ...item, text: e.target.value })}
      />
    </>
  )
}

export default function Page() {
  return (
    <>
      <DevTools/>
      <ItemList/>
    </>
  )
}
