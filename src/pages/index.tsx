import { DevTools } from 'jotai-devtools'

import { Link, type Path } from '@/router.ts'

type TPathElement = {
  path: Path
}

const paths: TPathElement[] = [
  {
    path: '/',
  },
  {
    path: '/core',
  },
  {
    path: '/dark',
  },
  {
    path: '/document1',
  },
  {
    path: '/level',
  },
  {
    path: '/fetch',
  },
  {
    path: '/login',
  },
  {
    path: '/ownAtom',
  },
  {
    path: '/provider',
  },
  {
    path: '/query',
  },
  {
    path: '/query/mutation',
  },
  {
    path: '/suspense',
  },
  {
    path: '/split',
  }
]

export default function Home() {
  return (
    <div className={'p-2 flex flex-col gap-2'}>
      <DevTools/>
      {
        paths.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={'w-fit p-1 bg-blue-500 text-gray-50 rounded-lg hover:opacity-80'}
          >
            {item.path}
          </Link>
        ))
      }
    </div>
  )
}
