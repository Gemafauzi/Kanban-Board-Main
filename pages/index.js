import React from 'react'
import List from '../Components/List'

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1 className='text-center pt-5'>My Kanban Board</h1>
        <div className='row pt-5'>
          <div className='col-3'>
            <List />
          </div>
          <div className='col-3'>
            <List />
          </div>
          <div className='col-3'>
            <List />
          </div>
          <div className='col-3'>
            <List />
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Home