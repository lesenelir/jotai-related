import { type FormEvent, useRef } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import {
  authTokenAtom,
  isLoginAtom,
  userInfoAtom,
  writeOnlyLoginAtom,
  writeOnlyLogoutAtom
} from '@/atoms'

export default function LoginPage() {
  const userInfo = useAtomValue(userInfoAtom)
  const isLoading = useAtomValue(isLoginAtom)
  const authToken = useAtomValue(authTokenAtom)
  const setWriteOnlyLogin = useSetAtom(writeOnlyLoginAtom)
  const setWriteOnlyLogout = useSetAtom(writeOnlyLogoutAtom)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!usernameRef.current || !passwordRef.current) {
      return
    }

    const username = usernameRef.current.value
    const password = passwordRef.current.value

    setWriteOnlyLogin({ username, password })

    usernameRef.current.value = ''
    passwordRef.current.value = ''
  }

  const handleLogoutClick = () => {
    setWriteOnlyLogout()

    if (!usernameRef.current || !passwordRef.current) {
      return
    }

    usernameRef.current.value = ''
    passwordRef.current.value = ''
  }

  return (
    <div className={'flex flex-col gap-2 p-4'}>
      {
        isLoading ? (
          <div className={'bg-gray-100 p-2 rounded-lg w-fit'}>
            Loading...
          </div>
        ) : (
          <>
            <p>username: {userInfo?.username || 'empty'}</p>
            <p>password: {userInfo?.password || 'empty'}</p>
            <p>authToken: {authToken || 'empty'}</p>
          </>
        )
      }

      <form onSubmit={handleLoginSubmit} className={'border w-fit p-2 flex flex-col gap-2'}>
        <label htmlFor="username">
          <input
            type="text"
            ref={usernameRef}
            id={'username'}
            placeholder={'username'}
            className={'p-2 border'}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            ref={passwordRef}
            id={'password'}
            placeholder={'password'}
            className={'p-2 border'}
          />
        </label>

        <div className={'flex justify-between'}>
          <button
            type={'submit'}
            className={'w-fit bg-blue-500 p-2 rounded-lg text-white shadow-md hover:bg-blue-500/90 hover-transition-change'}
          >
            Login
          </button>

          <button
            type={'button'}
            className={'w-fit bg-red-500 p-2 rounded-lg text-white shadow-md hover:bg-red-500/90 hover-transition-change'}
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </form>


    </div>
  )
}
