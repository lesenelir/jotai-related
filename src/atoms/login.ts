import { atom } from 'jotai'

export type TUserInfo = {
  username: string
  password: string
}

const loginService = async (username: string, password: string): Promise<{
  userInfo: TUserInfo,
  authToken: string
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userInfo: {
          username,
          password
        },
        authToken: 'fake-auth-token'
      })
    }, 3000)
  })
}

export const userInfoAtom = atom<TUserInfo | null>(null)

export const authTokenAtom = atom<string | null>(null)

export const isLoginAtom = atom<boolean>(false)

// writeOnlyLoginAtom
export const writeOnlyLoginAtom = atom<
  null,
  [{username: string, password: string}],
  void
>(
  null,
  async (_, set, update: {username: string, password: string}) => {
    try {
      set(isLoginAtom, true)
      const { userInfo, authToken } = await loginService(update.username, update.password)
      set(isLoginAtom, false)
      set(userInfoAtom, userInfo)
      set(authTokenAtom, authToken)
    } catch (e) {
      console.error('Login failed!', e)
    }
  }
)

// writeOnlyLogoutAtom
export const writeOnlyLogoutAtom = atom<null, [], void>(
  null,
  (_, set) => {
    set(userInfoAtom, null)
    set(authTokenAtom, null)
    // You can also clear the localStorage here...
  }
)

// writeOnlyUpdateUserInfoAtom
// 传入一个 TUserInfo 类型的参数，更新 userInfoAtom
export const writeOnlyUpdateUserInfoAtom = atom<null, [TUserInfo], void>(
  null,
  (_, set, update) => {
    set(userInfoAtom, update)
  }
)


