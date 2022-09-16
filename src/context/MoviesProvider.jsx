import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useState } from "react"

export const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {

    const db = getFirestore()

    const moviesCollectionRef =  collection(db, 'movies')

    const [moviesList, setMoviesList] = useState([])

    const addMovie = async (movie) =>  {
        setMoviesList([...moviesList, movie])
        await addDoc(moviesCollectionRef, {movie})
        
    }

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