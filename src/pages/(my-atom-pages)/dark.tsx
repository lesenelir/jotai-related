import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useState } from 'react'

function SomeOtherComponent({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
    </>
  )
}

// ------------------------------


let callback: (() => void) | null


// 目标：当我 ChildText 组件状态变化后，也能触发 ChildDiv 组件的状态变化
// 这里， 不同组件各自维护自己组件内的状态，

function ChildText() {
  const [isDark, setIsDark] = useState<boolean>(false)

  const handleChangeClick = () => {
    setIsDark(prev => !prev)
    // 调用注册的回调函数，以触发其他组件的状态变化
    callback && callback()
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
  const [isDark, setIsDark] = useState<boolean>(false)

  // 组件第一次挂载的时候在全局注册回调
  useEffect(() => {
    callback = () => {
      setIsDark(prev => !prev)
    }

    return () => {
      callback = null
    }
  }, [])

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


export default function DarkPage() {

  return (
    <div className={'flex flex-col gap-2'}>
      <SomeOtherComponent>
        <ChildText/>
      </SomeOtherComponent>

      <SomeOtherComponent>
        <ChildDiv/>
      </SomeOtherComponent>
    </div>
  )
}
