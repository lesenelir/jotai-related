import { atom } from 'jotai'

export const countAtom = atom(0)

export const countryAtom = atom('China')

export const citiesAtom = atom(['Beijing', 'Shanghai', 'Guangzhou'])

export const animeAtom = atom([
  { name: 'Naruto', episodes: 220, watched: true},
  { name: 'One Piece', episodes: 1000, watched: false },
  { name: 'Dragon Ball', episodes: 153, watched: true }
])

// Derived atom:

// 有向图
// watchedAnimeAtom 依赖于 animeAtom: watchedAnimeAtom -> animeAtom
// 创建了一个 readonly atom，只能读取，不能修改，所以不能用 useSetAtom
export const watchedAnimeAtom = atom((get) => { // 受控于 animeAtom
  const anime = get(animeAtom) // get 表示一种订阅关系，当前的 atom 依赖于 animeAtom
  return anime.filter((a) => a.watched)
})



