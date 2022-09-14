import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { firebaseAuth } from "../utils/firebase-config"

export const UserContext = createContext()

const UserProvider = ({ children }) => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [user, setUser] = useState(false)

  const handleChange = (e) => {
    
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })    

  }
  
   const handleLogIn = async() => {
    try {
      const {email, password} = form;
      await signInWithEmailAndPassword(firebaseAuth, email, password)      
      
    } catch (error) {
      console.log(error)      
    }
   }

   const handleSignIn = async() => {
    try {
      const {email, password} = form;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)      
      
    } catch (error) {
      console.log(error)      
    }
   }

   useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate('/')
    });
  }, []);

   


  return (
    <UserContext.Provider value={{ handleChange, handleLogIn, handleSignIn, user, form  }}>
        {children}
    </UserContext.Provider>
  )
}
export default UserProvider