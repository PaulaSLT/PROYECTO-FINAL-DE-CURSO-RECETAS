import React from 'react'
import { Outlet } from 'react-router-dom'
import Usbatlogout from '../components/Usbatlogout/Usbatlogout'
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
