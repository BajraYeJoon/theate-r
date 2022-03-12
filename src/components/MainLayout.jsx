import React from 'react'
import NavBar from './NavBar'
import Title from './Title'

const TITLE = "THEATE-R";
const SUB = "looking for shows and actor ??"

const MainLayout = ({children}) => {
  return (
    <>
      <Title title={TITLE} subtitle={SUB}/>
      
      <NavBar />

      {children}
    </>
  )
}

export default MainLayout