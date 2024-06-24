import React from 'react'
import { Outlet } from 'react-router-dom'
import Usbatlogout from '../components/Usbatlogout/Usbatlogout'
import Header from '../components/HeaderComponent/Header'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
