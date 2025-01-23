import { useRef, useState, useMemo} from 'react'
import { getMovies } from '../services/getMovies'
export function useMovies({search, sort}) {
  const [movies,setMovies] = useState([])
  const prevSearch = useRef(search)

  function ListMovies() {
    if (search === '') {
      return []
    }
    // Esto es para cuando cuando le doy cl
    else if (search !== prevSearch.current) {
        console.log('buscando')
        getMovies({search}).then((data) => {
          setMovies(data)
        })
    }
    
  }

  // No utilizar directamente el contrato de la api
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

//   Esto se hace que para que no se ejecuten cada vez que search cambie, solo cuando cambie mappedMovies y sort
  const sortedMovies = useMemo(() => {
    return sort ? mappedMovies.sort((a, b) => a.title.localeCompare(b.title)) : mappedMovies
  }, [mappedMovies, sort])
//   const sortedMovies = sort ? mappedMovies.sort((a, b) => a.title.localeCompare(b.title)) : mappedMovies
  

  return { mappedMovies: sortedMovies , ListMovies }

}