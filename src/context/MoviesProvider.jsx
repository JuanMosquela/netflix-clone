import { createContext, useState } from "react"

export const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {

    const [moviesList, setMoviesList] = useState([])

    const addMovie = (movie) =>  setMoviesList([...moviesList, movie])

    const removeMovie = (movie) => {
       const filterMovie = moviesList.filter(element => {
            return element.id !== movie.id
        })

        console.log(filterMovie)

        if(filterMovie){
            setMoviesList(filterMovie)
        } 
    }

    console.log(moviesList)

    


  return (
    <MoviesContext.Provider value={{ addMovie, removeMovie, moviesList }}>
        {children}
    </MoviesContext.Provider>
  )
}
export default MoviesProvider