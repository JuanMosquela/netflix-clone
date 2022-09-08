import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from '@mui/material'

import { AiOutlineSearch } from "react-icons/ai"
import { Box } from "@mui/system"


const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('')     

    }

  }


  return (
    <Box
        
        onSubmit={handleSubmit}
        sx={{
            
            border:'1px solid #FFF',
            backgroundColor:'transparent',
            color:'#FFF',
            pl:2,      
            mr: { sm: 5 }
        }}
    >
        <input 
            
            type="text"
            placeholder="Search..."
            value={searchTerm}
            style={{ backgroundColor:'transparent', color:'#FFF' }}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <IconButton type="submit" sx={{ p:'0 10px', color:'#FFF' }}>
          <AiOutlineSearch />
         </IconButton>

    </Box>
  )
}
export default SearchBar