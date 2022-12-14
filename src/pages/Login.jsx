import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import Background from '../img/background.jpg'
import {AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai'


const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

   const {handleChange, handleLogIn, form, loading} = useContext(UserContext)

  return (
    <div style={{
      background: `radial-gradient(circle at center,rgba(0,0,0,0.1), rgba(0,0,0,0.8) ),url(${Background})`,
      minHeight:'100vh',
      position:'fixed',
      width:'100vw',
      padding:'0 2%' 
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
          <Link to='/signUp'>Sign Up</Link>
                            
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
        backgroundColor:'rgba(0,0,0,.8)',
        width:'460px',
        minHeight:'300px',
        padding:'3rem 5rem',
        
      }}>
        <Typography
          variant='h4'
          component='h1'
          mb={3}
          sx={{
            textAlign:'left',
            fontWeight:'600'
          }}>
            Sign In
        </Typography>
        <input
          onChange={(e) => handleChange(e)} 
          type="text" 
          name='email' 
          value={form.email} 
          placeholder='Email address'
          style={{
            display:'block',
            width:'100%',
            borderRadius:'5px',
            padding:'15px 20px',
            backgroundColor:'#333333',
            color:'#FFF',
            marginBottom:'20px',
            fontSize:'1.2rem',
            outline:'none',
            border:'none',
            
          }} />
        <div className="input-group" style={{ position:'relative' }}>
          <input 
            onChange={(e) => handleChange(e)}
            type={showPassword ? 'text' : 'password'} 
            name='password' 
            value={form.password}
            placeholder='Password'
            style={{
              display:'block',
              width:'100%',
              borderRadius:'5px',
              padding:'15px 20px',
              backgroundColor:'#333333',
              color:'#FFF',
              marginBottom:'3rem',
              fontSize:'1.2rem',
              outline:'none',
              border:'none',
              
              
            }} />
          <div 
            style={{ position:'absolute', top:'35%', right:'15px', transform:'scale(1.5)' }} 
            onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <AiFillEye  /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
            

        
          <Button 
            onClick={() => handleLogIn()}
            variant='outlined'
            sx={{
              backgroundColor:'var(--color-red)',
              color:"#FFF",
              width:'100%',
              padding:'10px 20px',
              textTransform:'capitalize',
               fontWeight:'600',
               fontSize:'1.1rem',
               border:'none',
               outline:'none',
            '&:hover': {
              backgroundColor:'var(--color-red)',
              border:'none',
               outline:'none',
            }
            }}>
            {loading ? <CircularProgress style={{color:'rgba(255,255,255,.5)'}} /> : 'Sign In' }
          </Button>
        
        <Typography
          subtitle='h2'
          color='var(--color-grey)'
          sx={{
            paddingTop:'100px',
            textAlign:'left'
          }}>
            New to Netflix? <Link to='/signUp'>Sign Up now</Link>
        </Typography>
        
        
      </Box>
    </div>
    </div>
  )
}
export default Login