import { useState, useEffect, useRef } from 'react'

// ESTA SERIA CONTROLAR UN FORMULARIO DE FORMA CONTROLADA 
export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput =useRef(true)
    console.log(search)
  // // const inputRef = useRef()
  const changeSearch = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    const validateSearch = () => {  
        if(isFirstInput.current) {
            isFirstInput.current = search === '' ? true : false
            return
        }
      if(search.trim() === '') {
        setError('El campo de busqueda no puede estar vacio')
      }
      else if (search.length < 3) {
        setError('El campo de busqueda debe tener al menos 3 caracteres')
      }
      else if (search.length > 20) {
        setError('El campo de busqueda debe tener menos de 20 caracteres')
      }
      else{
        setError(null)
      }
    }
    validateSearch()
  }, [search])

  return { search, error, changeSearch }

}