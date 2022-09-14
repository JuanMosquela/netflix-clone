import { Link } from 'react-router-dom'
import { Box, Stack } from "@mui/system"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
 

    useEffect(() => {
      const changeBackground = () => {        
        if (window.scrollY >= 66) {
          setNavbar(true)
          
        } else {
          setNavbar(false)
          
        }
    }

    window.addEventListener('scroll', changeBackground)
      
    }, [])   



  return (
    <header
    style={{
        background: navbar ? '#000' : 'var(--linear-gradient-top)',
        position:'fixed',
        width:'100vw', 
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 2%',
        zIndex:2000,
        
        

    }}
    >
        <div
          style={{
            display:'flex',
            alignItems:'center',
            
          }}
        >
            <img 
            src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image" 
            alt="logo"
            width={100}
            height={50}
            />
            <Box
              sx={{
                display:{ md:'flex', xs:'none'},
                color:'#FFF',
                gap:'2rem',
                marginLeft:'35px',
                
              }}
            >
                <Link to='/'>Home</Link>
                <Link to='/series'>Series</Link>                
                <Link to='/movies'>Movies</Link>
                <Link to='/myList'>My List</Link>
            </Box>
        </div>
        <div 
            
            style={{ display:'flex', alignItems:'center' }}>
            <SearchBar />
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="profile"
                width={30}
                height={30} />
            
        </div>
    </header>
  )
}
export default Navbar