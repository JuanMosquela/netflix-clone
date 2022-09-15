import { Card, CardMedia, CircularProgress, Modal, Paper, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import axios from "../utils/axios"
import { API_KEY } from "../utils/requests";
import ReactPlayer from 'react-player/lazy';



const MaterialModal = ({ handleClose, open, movie }) => {

    const [trailerURL, setTrailerURL] = useState('')    

    useEffect(() => {
        const fetchTrailer = async() => {
            const { data: { results } } = await axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
            const trailer = results.find(result => {
                return result.type === 'Trailer' 
            })
            
            setTrailerURL(trailer.key)       

        }

        console.log(movie)

        fetchTrailer()
      
    }, [])    


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',       
        bgcolor: '#000',           
        boxShadow: 24,
        color:'#FFF',        
        
    };   



  return (
    <Modal
        open={open}
        onClose={() => handleClose()}
        onBackdropClick={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border:'none' }}
    >
        <Box sx={style}>
            <AiOutlineCloseCircle 
            onClick={() => handleClose()}
            style={{
                position:'absolute',
                top:'5px',
                right:'5px',
                fontSize:'30px'
            }} />
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${trailerURL}`} 
                controls={true}
                width='100%' 
            />
            <Stack
                display='flex'
                flexDirection='row'
                alignItems='center'
                gap={4}
                p={1}>
                <Box
                flex={4}>
                    <Paper sx={{backgroundColor:'transparent', display:'flex', gap:'1rem', alignItems:'center'}}>
                        <Typography variant="h6" mb={1} component="h3" sx={{ fontSize:'12px', color:'rgb(135, 231, 135)'  }} >
                        {movie.vote_average} % Match
                        </Typography>  
                        
                        <Typography variant="h6" mb={1} component="h3" sx={{ fontSize:'12px', color:'#FFF'  }} >
                        {movie.release_date} 
                        </Typography> 
                        
                        
                    </Paper> 
                    
                    
                    <Typography variant="h6" component="p" sx={{ fontSize:'14px' }}>
                    {movie.overview} 
                    </Typography> 
                </Box>   
                <Box
                  flex={1}
                  
                  
                  
                  
                >
                    <Typography variant="h6" mb={1} component="p" sx={{ fontSize:'12px', color:'#FFF' }} >
                       Original lenguage: {movie.original_language}
                    </Typography> 
                    <Typography variant="h6" mb={1} component="p" sx={{ fontSize:'12px', color:'#FFF' }} >
                        Total votes: {movie.vote_count}
                    </Typography> 
                </Box>  
            </Stack>      
            
        </Box>
    </Modal> 
  )
}
export default MaterialModal