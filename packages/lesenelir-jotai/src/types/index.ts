export interface IAtom<T> {
  init: T
}

export interface IAtomState<T> {
  value: T
  listeners: Set<() => void>
}

