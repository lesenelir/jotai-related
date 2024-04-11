import { Suspense } from 'react'

// 在 js 中，任何类型的值都可以被 throw 并被外层 catch
// Promise 边界
let isLoaded = false

function Content() {
  if (!isLoaded) {
    // 该处可以换成任意的异步任务
    throw new Promise((resolve) => {
      setTimeout(() => {
        isLoaded = true
        resolve('')
      }, 2000)
    })
  }

  return (
    <div>
      content
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>loading.....</div>}>
        <Content/>
      </Suspense>
    </div>
  )
}
