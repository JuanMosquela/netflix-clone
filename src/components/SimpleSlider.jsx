import { useEffect, useState } from "react"
import axios from "../axios"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Card, CardMedia, Skeleton, Stack } from "@mui/material";
import Movie from "./Movie";
import './simpleSlider.css'






const SimpleSlider = ({ url, title }) => {

    const [movies, setMovies] = useState([]) 
    const [loading, setLoading] = useState(false)   

    useEffect(() => {
        const fetchURL = async () => {
            try {
              const {data: {results}} = await axios.get(url);
              setMovies(results)
              setLoading(true)
                
            } catch (error) {
                console.log(error)                
            }
        }
        fetchURL()       
      
    }, [url])

    console.log(movies)
    

  return (
    
    <Stack
      sx={{
        p:'10px 2%'
      }}>
      <h2
      style={{
        marginBottom:'10px'
      }}
      >{title}</h2>
    {
      loading ? (
        <Box 
        className="container"         
          sx={{
            marginBottom:'2rem',
            display:'flex',            
            gap:2,            
            overflowY:'hidden',
            
            width:'100%',
            
                     
          }}>        
          {movies.map(movie => (
            <Movie movie={movie} />            
          ))}
       </Box>        
      ) : (                          
            <Box              
              sx={{ display:'flex', gap:2, marginBottom:'2rem' }}>
              <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
                <Skeleton 
                sx={{ backgroundColor:'rgba(204, 204, 204, 0.2)'}} 
                variant="rectangular" width={240} height={160} />
            </Box>    

      )
    }
  </Stack>
  )
}
export default SimpleSlider