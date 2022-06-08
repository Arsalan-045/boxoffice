import React from 'react'
import { FlexGrid } from '../Styled'
import ActorCard from './ActorCard'
const ActorGrid = ({data}) => {

  return (
    <FlexGrid>
      {data.map(({person}) => (

          <ActorCard key={person.id} name={person.name} country={person.country?person.country.name:null} birthday={person.birthday} deathday={person.deathday} gender={person.gender}
          
          image={person.image ? person.image.medium : "Image not found"}/>

      ))}
    </FlexGrid>
  )
}

export default ActorGrid
