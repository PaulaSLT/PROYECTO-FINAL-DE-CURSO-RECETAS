import React from 'react'
import { Outlet } from 'react-router-dom'
import Usbatlogout from '../components/Usbatlogout/Usbatlogout'

function Layout() {
  return (
    <div>
      <Usbatlogout/>
      <Outlet/>
    </div>
  )
}

export default Layout
