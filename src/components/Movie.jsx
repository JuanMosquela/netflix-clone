import { Card, CardMedia } from "@mui/material"

const base_urlPoster = 'https://image.tmdb.org/t/p/original/'

const Movie = ({ movie }) => {
  return (
    <Card
        key={movie.id}
        sx={{
        minWidth:240,
        height:160,
        borderRadius:'5px',
                     
        }}>
        <CardMedia 
            component='img'             
            image={`${base_urlPoster}${movie?.poster_path}`}
            alt={movie.name}            
            sx={{                    
                height:'100%',
                width:'100%',
                overflow:'hidden',
                
                objectFit:'cover',
                    
                '&:hover': {
                    cursor:'grab',
                    transform:'scale(1.05)',
            },}} 
                    
        />
    </Card>               
  )
}

export default Movie