import React from 'react'

const Header = () => {
  return (
    <div className='container-header'>
      <div className='row'>
        <div className='col-6'>
          <p className='text-head-card'>Not Started</p>
        </div>
        <div className='col-6'>
          <div class="box-expire" role="alert">
            <p className='text-center text-head2-card'>Expire on 24th June</p> 
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Header