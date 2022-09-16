import { Box, Button, Stack, Typography } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Logout = () => {

    const { handleLogout } = useContext(UserContext)

    const { form } = useContext(UserContext)

    console.group(form)



  return (
    <>
    <nav style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 2%',
        backgroundColor:'#000',
        position:'fixed',
        width:'100vw'
        
        
      }}>
        <Link to='/'>
            <img 
            src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image" 
            alt="logo"
            width={200}
            height={100}
        />
        </Link>
      <Button 
        variant="contained"
        sx={{
            fontSize:{md:'17px', sm:'14px', xs:'10px'},
            backgroundColor:'var(--color-red)',
            borderRadius:'5px', 
            textTransform:'capitalize', 
            px:'15px',                            
            color:"#FFF",
            '&:hover': {
                backgroundColor:'var(--color-red)'
            }
        }}>
        <Link to='/login'>Sign In</Link>
                            
    </Button>

    </nav>
    
    
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        minHeight:'100vh',
        backgroundColor:'#000'
      }}>
        <Stack
          display='flex' 
          flexDirection='row'
          gap={4}>
            <Box 
              display='flex'
              flexDirection='column'
              gap={3}>
                <Typography variant='h4' sx={{ color:'#FFF'}}>
                    ¿Wish to Logout?
                </Typography>
                <Button 
                    variant='outlined'
                    sx={{
                        backgroundColor:'red',
                        color:'#FFF'

                    }}
                    onClick={() => handleLogout()}
                    >
                        Logout
                </Button>
            </Box>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="profile"
                width={120}
                height={120} 
            />
        </Stack>
    </Box>
    </>
  )
}
export default Logout