export function ListMovies ({ movies}) {

    return(
        <>
            <ul className='movies'>
              {
                movies.map((movie) => (
                  <li key={movie.id} className='movie'>
                    <img src={movie.poster} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                  </li>
                ))
              }
            </ul>
        
        
        </>
    )

}

export function NoMovies() {
    return (
        <p>No se encontraron peliculas</p>
    )
}   

export function Movies({ movies }) {
    const hasMovies = movies.length > 0
    return (
    <>
         {
          hasMovies ? (
            <ListMovies movies={movies} />  
          ) : (
            <NoMovies />
          ) 
        }

    </>
    )
}