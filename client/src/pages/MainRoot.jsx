import React from 'react'

import {Outlet} from 'react-router-dom'
import Navbarr from '../components/Navbarr'
const MainRoot = () => {
  return (
    <>
    <Navbarr/>
    <Outlet/>
    </>
  )
}

export default MainRoot