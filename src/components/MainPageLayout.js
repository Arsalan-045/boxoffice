import React from 'react'
import Title from './Title'
import Nav from './Nav'

const MainPageLayout = ({children}) => {

  return (
    <div>
       <Title title="Box Office " subtitle="Are you looking for movie or an actor?"/>

       <Nav/>

       {children}
       
    </div>
  )
}

export default MainPageLayout
