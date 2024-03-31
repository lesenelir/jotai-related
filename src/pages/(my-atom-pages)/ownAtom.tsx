import clsx from 'clsx'
import * as React from 'react'

import { atom, useAtom } from '@lesenelir/jotai'

function SomeOtherComponent({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
    </>
  )
}

// ------------------------------

const isDarkAtom = atom<boolean>(false)


function ChildText() {
  const [isDark, setIsDark] = useAtom(isDarkAtom)

  const handleChangeClick = () => {
    setIsDark(prevState => !prevState)
  }

  return (
    <div className={'border p-2'}>
      <p
        className={clsx(
          'text-black',
          isDark && 'bg-black text-gray-50'
        )}
      >
        child text
      </p>

      <button
        className={'bg-blue-500 text-white rounded-lg p-1 w-fit'}
        onClick={handleChangeClick}
      >
        change
      </button>
    </div>
  )
}

function ChildDiv() {
  const [isDark, _] = useAtom(isDarkAtom)

  return (
    <div className={'p-2'}>
      <p
        className={clsx(
          'text-black',
          isDark && 'bg-black text-gray-50'
        )}
      >
        child div
      </p>
    </div>
  )
}

export default function OwnAtomPage() {
  return (
    <div className={'p-2'}>
      <SomeOtherComponent>
        <ChildText/>
      </SomeOtherComponent>

      <SomeOtherComponent>
        <ChildDiv/>
      </SomeOtherComponent>
    </div>
  )
}
