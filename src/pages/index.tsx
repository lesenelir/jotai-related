import { Link, type Path } from '@/router.ts'

type TPathElement = {
  path: Path
  component: string
}

const path: TPathElement[] = [
  {
    path: '/',
    component: 'Home',
  },
  {
    path: '/core',
    component: 'Core',
  },
  {
    path: '/dark',
    component: 'Dark',
  },
  {
    path: '/document1',
    component: 'Document1',
  },
  {
    path: '/fetch',
    component: 'Fetch',
  },
  {
    path: '/login',
    component: 'Login',
  },
  {
    path: '/ownAtom',
    component: 'OwnAtom',
  },
  {
    path: '/provider',
    component: 'Provider',
  },
  {
    path: '/query',
    component: 'Query',
  },
  {
    path: '/query/mutation',
    component: 'QueryMutation',
  },
]

export default function Home() {
  return (
    <div className={'p-2 flex flex-col gap-2'}>
      {
        path.map(item => (
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
