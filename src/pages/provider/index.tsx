import { Provider, useAtom } from 'jotai'

import { countAtom } from '@/atoms'

// Provider 会创建一个新的 context，所以在不同的 Provider 中，countAtom 是不同的
// 为每个子树提供不同的状态，provider 允许在不同的组件树中隔离状态，起到作用域隔离的作用
// 应用中有多个 Provider 可以管理不同的状态部分，可以让组件的管理更加清晰

function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <p>{count}</p>
      <button
        className={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
        onClick={() => setCount((c) => c + 1)}
      >
        Add
      </button>
    </>
  )
}

function Component1() {
  return (
    <Provider>
      <Counter />
    </Provider>
  )
}

function Component2() {
  return (
    <Provider>
      <Counter />
    </Provider>
  )
}

export default function BlogPage() {
  return (
    <>
      <Component1/>
      <Component2/>
    </>
  )
}
