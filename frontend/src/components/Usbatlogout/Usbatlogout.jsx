import React from 'react'

function Usbatlogout() {

    const logout = () => {
        localStorage.removeItem('token')
        
    }
  return (
    
    <div>
        <button onClick={() => logout()}>Logout</button>
      
    </div>
  )
}

export default Usbatlogout
