import { Box } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import SimpleSlider from './components/SimpleSlider';
import requests from './utils/requests';


function App() {

  const [modal, setModal] = useState(false)

  const handleModal = (state) => setModal(state)

  console.log(modal)



  return (
    <div className="App">
      <Banner url={requests.fetchNetlixOriginals} />
      <Box sx={{ 
        marginTop: { md:'-100px', sm:'-90px', xs:'-25px' }, }}>
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchTrending} title='Trending Now' />      
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchTopRated} title='Top Rated' /> 
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchNetlixOriginals} title='Netflix Originals' />
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchActionMovies} title='Action Movies' /> 
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchComedyMovies} title='Comedy Movies' />       
      <SimpleSlider modal={modal} handleModal={handleModal} setModal={modal} url={requests.fetchDocumentaries} title='Documentaries' /> 
      </Box>
    </div>
  );
}

export default App;
