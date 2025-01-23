import { Movies } from './components/Movies/Movies' 
import { useMovies } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch'
import './App.css'



function App() {
  const [sort, setSort] = useState(false)
  const {search, error, changeSearch} = useSearch()
  const { mappedMovies, ListMovies } = useMovies({search,sort})

  // // const inputRef = useRef()
  const handleChange = (event) => {
    changeSearch(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    ListMovies()
  }
  const handleSort = (event) => {
    setSort(event.target.checked)
  }

  

 
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}  className='form'>
          <input onChange={handleChange}  type="text" placeholder='Buscar Pelicula' />
          {error && <p>{error}</p>}
          <input onChange={handleSort} type="checkbox" />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
       <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
