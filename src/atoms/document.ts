import { atom } from 'jotai'

export const countryAtom = atom<string>('China')

export const citiesAtom = atom<string[]>(['Beijing', 'Shanghai', 'Guangzhou'])

export type TAnime = {
  name: string
  episodes: number
  watched: boolean
}

export const animeAtom = atom<TAnime[]>([
  { name: 'Naruto', episodes: 220, watched: true},
  { name: 'One Piece', episodes: 1000, watched: false },
  { name: 'Dragon Ball', episodes: 153, watched: true }
])

// Derived atom:

// 有向图
// watchedAnimeAtom 依赖于 animeAtom: watchedAnimeAtom -> animeAtom
// 创建了一个 readonly atom，只能读取，不能修改，所以不能用 useSetAtom
export const watchedAnimeAtom = atom<TAnime[]>((get) => { // 受控于 animeAtom
  const anime = get(animeAtom) // get 表示一种订阅关系，当前的 atom 依赖于 animeAtom
  return anime.filter((a) => a.watched)
})
