import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Usbatlogout() {
  const [token, setToken] = useState('')
  const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        navigate('/')
        
    }

    useEffect(() => {
      setToken(localStorage.getItem("token"))
    }, [token])


  return (
    <div>
      {localStorage.getItem("token") && (
        <button onClick={() => logout()}>Logout</button>
      )}
    </div>
  );
}

export default Usbatlogout


