import { useAtomValue, useSetAtom } from 'jotai'

import { animeAtom, watchedAnimeAtom } from '@/atoms'

export default function Document1() {
  const watchedAnime = useAtomValue(watchedAnimeAtom)
  const setAnime = useSetAtom(animeAtom)

  // 当修改顶层的 atom 时，derive
  const handleAddClick = () => {
    setAnime((prev) => [
      ...prev,
      { name: 'Cowboy Bebop', episodes: 26, watched: true }
    ])
  }

  return (
    <div className={'flex gap-2'}>
      <div>
        <h1 className={'font-medium text-lg'}>Watched Anime:</h1>
        <ul>
          {watchedAnime.map((anime) => (
            <li key={anime.name}>
              {anime.name}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
        onClick={handleAddClick}
      >
        Add Cowboy Bebop
      </button>
    </div>
  )
}
