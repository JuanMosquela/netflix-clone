import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { UserContext } from "../context/UserProvider"

const PrivateRoutes = () => {

    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    useEffect(() => {
        if(!user) navigate('/login') 
      
    }, [])
    
  return (
    user && <Outlet /> 
  )
}
export default PrivateRoutes