import { Button, ButtonGroup, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import {GoTriangleRight} from 'react-icons/go'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import axios from '../axios'


const base_urlPoster = 'https://image.tmdb.org/t/p/original/'


const Banner = ({ url }) => {

    const [movie, setMovie] = useState(null) 

    console.log(url)

    useEffect(() => {
        const fetchURL = async () => {
            try {
              const {data: {results}} = await axios.get(url);
              setMovie(results[Math.floor(Math.random()* results.length - 1)])             
                
            } catch (error) {
                console.log(error)                
            }
        }
        fetchURL()       
      
    }, [])

     console.log(movie)


  return (
   
        <Stack>
            <Box                
                width='100%'
                height={700}                               
                sx={{
                    objectFit:'cover',
                    backgroundImage:`url(${base_urlPoster}${movie?.poster_path})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}
            >
                <Box sx={{ 
                    marginLeft:'2%',
                    pt:'140px'
                    
                    
                     }}>
                <Typography
                variant='h1'
                    color='#FFF'
                      sx={{
                        fontSize:'5rem',
                        marginBottom:'2rem'
                                                                        
                    }}>
                    {movie?.name || movie?.original_name}

                </Typography>
                
                <Typography
                    sx={{ 
                        
                        fontSize:'17px',
                        marginBottom:'2rem',
                        
                        maxWidth:'600px' }}                    
                        fontWeight='bold'
                    color='#FFF'>
                        {movie?.overview}

                </Typography>
                <Box sx={{
                    marginBottom:'1.5rem',
                    display:'flex',
                    gap:1,
                    
                }}>
                    <Button 
                        variant="contained"
                        sx={{
                             fontSize:'18px',
                            backgroundColor:'#FFF',
                            color:"#000",
                            borderRadius:'5px',
                            px:'30px',
                            textTransform:'capitalize',
                            fontWeight:'bold'
                        }}>
                            <GoTriangleRight
                            style={{ marginRight:'10px', transform:'scale(1.4)' }} />
                            Reproducir
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{
                            fontSize:'18px',
                            backgroundColor:'rgba(128, 128, 128, .6)',
                            borderRadius:'5px', 
                            textTransform:'capitalize', 
                            px:'30px',           
                            
                            color:"#FFF"
                        }}>
                            <AiOutlineInfoCircle 
                            style={{ marginRight:'10px', transform:'scale(1.4)' }} />
                            Mas informacion
                        </Button>
                </Box>
                </Box>
            </Box>
            
                    
            
                
                
            
        </Stack>
    
  )
}
export default Banner