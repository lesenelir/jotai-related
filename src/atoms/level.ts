import { atom } from 'jotai'

export const userScoreAtom = atom<number>(0)

export const readWriteUserLevelAtom = atom<
  string,
  ['+' | '-'],
  void
>(
  (get) => {
    const score = get(userScoreAtom)
    if (score < 60) {
      return 'Beginner'
    } else if (score < 80) {
      return 'Intermediate'
    } else {
      return 'Expert'
    }
  },
  (get, set, update) => {
    const currentScore = get(userScoreAtom)

    let newScore

    switch (update) {
      case "+":
        newScore = currentScore + 10
        break
      case "-":
        newScore = currentScore - 10
        break
      default:
        newScore = currentScore
    }
    set(userScoreAtom, newScore)
  }
)

