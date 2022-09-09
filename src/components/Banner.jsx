import { Button, Stack, Typography } from '@mui/material'
import {GoTriangleRight} from 'react-icons/go'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import axios from '../utils/axios'


const base_urlPoster = 'https://image.tmdb.org/t/p/original/'


const Banner = ({ url }) => {

    const [movie, setMovie] = useState(null)    

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

    
  return (
   
        <Stack>
            <Box                
                width='100%'
                                               
                sx={{
                    objectFit:'cover',
                    backgroundImage:`url(${base_urlPoster}${movie?.poster_path})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    minHeight: { md:'90vh', sm:'85vh', xs:'60vh' }
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
                        fontSize:{md:'100px', sm:'70px', xs:'40px'},
                        marginBottom:'2rem'
                                                                        
                    }}>
                    {movie?.name || movie?.original_name}

                </Typography>
                <Typography
                    sx={{  
                        display: {md: 'block', xs:'none'},                      
                        fontSize:{md:'17px', sm:'15px', xs:'14px'},
                        marginBottom:'2rem',                        
                        maxWidth:{ md:'600px', sm:'500px' }}}                   
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
                            fontSize:{md:'17px', sm:'14px', xs:'10px'},
                            backgroundColor:'#FFF',
                            color:"#000",
                            borderRadius:'5px',
                            px:'15px',
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
                            fontSize:{md:'17px', sm:'14px', xs:'10px'},
                            backgroundColor:'rgba(128, 128, 128, .6)',
                            borderRadius:'5px', 
                            textTransform:'capitalize', 
                            px:'15px',           
                            
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