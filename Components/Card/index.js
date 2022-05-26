import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <>
      <div class="card-body-card">
        <Header />
        <TagList />
        <Avatar />
      </div>
        
      </>
  )
}

export default Card