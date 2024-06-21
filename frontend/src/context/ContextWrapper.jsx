import { createContext, useEffect, useState } from "react";
import { getMyProfileContext } from "../services/user.service";


export const UserContext = createContext('valor')



function ContextWrapper({children}) {
  const [user, setUser] = useState('')

  useEffect(()=> {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token')
      if(token){
        try {
          const response = await getMyProfileContext()
            setUser(response)
          
        } catch (error) {
          console.error('Error fetching profile:', error.message)
          localStorage.removeItem('token')
        }
      }
    }

    fetchProfile()
  }, [])
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextWrapper;