// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'

const InfoLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default InfoLayout