import { Box } from "@mui/material"
import Banner from "../components/Banner"
import SimpleSlider from "../components/SimpleSlider"
import requests from "../utils/requests"


const Home = () => {
  return (
    <div>
        <Banner url={requests.fetchNetlixOriginals} />
        <Box sx={{ 
            marginTop: { md:'-100px', sm:'-90px', xs:'-25px' }, }}>
            <SimpleSlider url={requests.fetchTrending} title='Trending Now' />      
            <SimpleSlider url={requests.fetchTopRated} title='Top Rated' /> 
            <SimpleSlider url={requests.fetchNetlixOriginals} title='Netflix Originals' />
            <SimpleSlider url={requests.fetchActionMovies} title='Action Movies' /> 
            <SimpleSlider url={requests.fetchComedyMovies} title='Comedy Movies' />       
            <SimpleSlider url={requests.fetchDocumentaries} title='Documentaries' /> 
        </Box>
    </div>
  )
}
export default Home