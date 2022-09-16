import { useContext, useState } from "react"
import { MoviesContext } from "../context/MoviesProvider"
import Movie from '../components/Movie'
import { Card, CardMedia, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {MdOutlineError} from 'react-icons/md'
import { useEffect } from "react"

import {collection, getDocs, getFirestore} from 'firebase/firestore'


const base_urlPoster = 'https://image.tmdb.org/t/p/original/'

const MyList = () => { 

  const { moviesList, removeMovie, moviesCollectionRef } = useContext(MoviesContext)
  
  const [movies, setMovies] = useState([])

  

  useEffect(() => {

    const getMovies = async() => {
      const data = await getDocs(moviesCollectionRef);
      setMovies(data.docs.map(doc => ({...doc.data(), id: doc.id})))      

    }

    getMovies()

    

    
    
  }, [])
  

  


  return (
    <Stack sx={{
      padding:'0 1rem',
      minHeight:'40vh', 
      marginTop:'2rem'
    }}>
      {
        moviesList.length === 0 ? (
          <Typography 
          variant="h3"
          sx={{
            fontSize:{md:'1.4rem', xs:'1rem'},
            marginBottom:'12px',
            display:'flex',
            gap:'1rem',
            alingItems:'center'
          }}>
            You haven't add movies yet 
            <MdOutlineError />          

          </Typography> 
        ) : (
          <Typography 
          variant="h3"
          sx={{
            fontSize:{md:'1.4rem', xs:'1rem'},
            marginBottom:'12px'
          }}>
            My list

          </Typography> 

        )
      }
    <Box 
      display='flex'
      alignItems='center'
      mt={2}
      gap={2}
      
      >
        
        

       
      {
        moviesList.map(movie => (
        <Card        
          key={movie.id}
          sx={{
          width:{ md:240, sm:160, xs: 120},
          height:{ md:300, sm: 100, xs:80},
          borderRadius:'5px',
          position:'relative'
                      
          }}>
            <AiOutlineCloseCircle 
              onClick={() => removeMovie(movie)}
              style={{ 
                position:'absolute',
                top:'0px',
                right:'0px',
                fontSize:'2rem', 
                color:'#FFF',
                cursor:'pointer' }} />
          <CardMedia
              
              component='img'             
              image={`${base_urlPoster}${movie?.poster_path}` }
              alt={movie.name}            
              sx={{                    
                  height:'100%',
                  width:'100%',
                  overflow:'hidden',                
                  objectFit:'cover',
                      
                }}
              
            />          

        </Card> 

        ))
      }
    </Box>
    </Stack>
  )
}
export default MyList