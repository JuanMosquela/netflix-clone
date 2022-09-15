import { useEffect, useState } from "react"
import axios from "../utils/axios"
import Movie from "./Movie";
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";




const SimpleSlider = ({ url, title, style }) => {

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
      
    }, [])

     console.log(movies)

  

    
    

  return (
    <Box sx={{      
      padding:'2rem 2%',    
      
    }}>
      <Typography
        variant="h3"
        sx={{
          fontSize:{md:'1.4rem', xs:'1rem'},
          marginBottom:'12px'
        }}
        >
        {title}
      </Typography>
    <Swiper    
      modules={[Navigation, Pagination, Scrollbar, Thumbs]}
      spaceBetween={20}
      slidesPerView={7}
      
      navigation={true}
      grabCursor={true}
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{        
        200:{
          slidesPerView: 3,
          spaceBetween: 14,
        },       
        
        480: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        
        640: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
          
        },
        1336: {
          slidesPerView: 6,
          spaceBetween: 32,
        },
      }}
    >      
      {movies.map(movie => (        
          <SwiperSlide 
            
            key={movie.id}>
            
            <Movie 
              style={style} 
              movie={movie} 
                
            />
            
          </SwiperSlide>
       
      ))}
      
      
  </Swiper>
  </Box>
    
    
  )
}
export default SimpleSlider