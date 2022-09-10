import React from 'react'
import { Box, Button, Card, CardMedia, Modal, Typography} from "@mui/material"
import { useState } from "react"


const base_urlPoster = 'https://image.tmdb.org/t/p/original/'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Movie = ({ movie }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

 
  
  return (
    <Card        
        key={movie.id}
        sx={{
        width:{ md:240, sm:160, xs: 120},
        height:{ md:160, sm: 100, xs:80},
        borderRadius:'5px',
                     
        }}>
        <CardMedia 
            onClick={handleOpen}
            component='img'             
            image={`${base_urlPoster}${movie?.poster_path}`}
            alt={movie.name}            
            sx={{                    
                height:'100%',
                width:'100%',
                overflow:'hidden',
                
                objectFit:'cover',
                    
                '&:hover': {
                    cursor:'pointer',
                    transform:'scale(1.05)',
            },}} 
                    
        />
        <Modal
        open={open}
        onClose={() => handleClose()}
        onBackdropClick={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.title || movie.original_title || movie.original_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          
        </Box>
      </Modal> 
    </Card> 
                
  )
}

export default Movie