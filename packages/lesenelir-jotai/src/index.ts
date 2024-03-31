import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { IAtom, IAtomState } from '@/types'

// keep track of the state of the atom
export const atomStateMap = new WeakMap<IAtom<any>, IAtomState<any>>()

// atom is a function that returns an object with an init property
export const atom = <T>(initialValue: T): IAtom<T> => {
  return {
    init: initialValue
  }
}

// give an atom and get the value of atomStateMap
export const getAtomState = <T>(atom: IAtom<T>): IAtomState<T> => {
  let atomState = atomStateMap.get(atom)

  if (!atomState) {
    atomState = { value: atom.init, listeners: new Set<Function>() }
    atomStateMap.set(atom, atomState)
  }

  return atomState
}


export const useAtom = <T>(atom: IAtom<T>): [T, Dispatch<SetStateAction<T>>] => {
  const atomState = getAtomState(atom)
  const [value, setValue] = useState<T>(atomState.value)

  useEffect(() => {
    const callback = () => setValue(atomState.value)

    atomState.listeners.add(callback)
    callback()

    return () => {
      atomState.listeners.delete(callback)
    }
  }, [atomState])

  const setAtom = (nextValue: T | ((prevValue: T) => T)) => {
    atomState.value = typeof nextValue === 'function'
      ? (nextValue as (prevValue: T) => T)(atomState.value)
      : nextValue

    // all the subscribed components know atom's state changes
    atomState.listeners.forEach((l: Function) => l())
  }

  return [value, setAtom]
}

