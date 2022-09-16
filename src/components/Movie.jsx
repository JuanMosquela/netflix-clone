import React, { useState } from 'react'
import { Card, CardMedia} from "@mui/material"

import MaterialModal from './MaterialModal';
import movieTrailer from 'movie-trailer';


const base_urlPoster = 'https://image.tmdb.org/t/p/original/'




const Movie = ({ movie, style }) => {

  const [trailerURL, setTrailerURL] = useState('')

  const [open, setOpen] = React.useState(false);
  const handleOpen = (movie) =>{ 
    setOpen(true)
    movieTrailer(movie?.name || '')
    .then(url => {
      const urlParams = new URLSearchParams(new URL(url).search)
      setTrailerURL(urlParams.get('v'))
    })
    .catch(error => console.log(error))
  };
  const handleClose = () => setOpen(false);  

 
  
  return (
    <Card        
        key={movie.id}
        sx={{
        width:{ md:240, sm:160, xs: 120},
        height: style ? {md: style.height, xs:180} : { md:160, sm: 100, xs:80},
        borderRadius:'5px',
                     
        }}>
        <CardMedia 
            onClick={() => handleOpen(movie)}
            component='img'             
            image={`${base_urlPoster}${movie?.poster_path}` }
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
          {open && 
          <MaterialModal            
            trailerURL={trailerURL}           
            handleClose={handleClose} 
            open={open} 
            movie={movie}/>}

    </Card> 
                
  )
}

export default Movie