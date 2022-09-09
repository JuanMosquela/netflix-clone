import { Card, CardMedia } from "@mui/material"

const base_urlPoster = 'https://image.tmdb.org/t/p/original/'

const Movie = ({ movie }) => {
  return (
    <Card
        key={movie.id}
        sx={{
        width:{ md:240, sm:160, xs: 120},
        height:{ md:160, sm: 100, xs:80},
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