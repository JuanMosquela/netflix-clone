import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import Background from '../img/background.jpg'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'

const SignUp = () => {

  const [password, setPassword] = useState(false)



  return (
    <div style={{
      background: `radial-gradient(circle at center,rgba(0,0,0,0.1), rgba(0,0,0,0.8) ),url(${Background})`, 
      minHeight:'100vh',
      position:'fixed',
      width:'100vw' 
    }}>
      <nav style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 2%'
      }}>
      <img 
        src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image" 
        alt="logo"
        width={200}
        height={100}
      />
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
    <div style={{
      minHeight:'100vh',     
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      
    }} >
      
      
      <Box sx={{
        textAlign:'center',
        color:'#FFF',
        maxWidth:'600px',
        
      }}>
        <Typography
          variant='h2'
          component='h1' 
          mb={2} 
          sx={{fontWeight:'700'}}>
            Unlimited movies, TV shows and more
        </Typography>
        <Typography 
          variant='h5'
          mb={3}
          sx={{ fontWeight:'600'}}>
            
            Watch anywhere. Cancel any time.
        </Typography>
        <Typography
          variant='h6'
          mb={2}
          >
            Ready to watch? Enter your email to create or restart membership
        </Typography>
        <Box sx={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr'
        }}>
          <input 
            type="text" 
            name='email' 
            value='' 
            placeholder='Email address'
            style={{
              fontSize:{md:'17px', sm:'14px', xs:'10px'},
              padding:'15px 20px'
            }} />
            {password && (
              <input 
              type="password" 
              name='password' 
              value='' 
              placeholder='Password'
              style={{
                fontSize:{md:'17px', sm:'14px', xs:'10px'},
                padding:'15px 20px'
              }} />
            )}
          {!password && (
            <Button 
            variant="contained"
            onClick={() => setPassword(true)}
            sx={{
                fontSize:{md:'17px', sm:'14px', xs:'10px'},
                backgroundColor:'var(--color-red)',            
                textTransform:'capitalize', 
                padding:'12px 20px',                            
                color:"#FFF",
                
                '&:hover': {
                  backgroundColor:'var(--color-red)'
                }
            }}>
            Get Started
            <MdOutlineArrowForwardIos style={{marginLeft:'15px'}} />                           
          </Button>
          )}
        </Box>
      </Box>
    </div>
    </div>
  )
}
export default SignUp