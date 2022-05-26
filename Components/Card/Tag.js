import React from 'react'

const Tag = () => {
  return (
    <div className='container-tag'>
      <p className='text-tag'>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, 
        by injected humour.</p>
      <div className='basicly-a-list'>
        <p className='text-tag-body'><input type="checkbox" className='me-3'/>1</p>
        <p className='text-tag-body'><input type="checkbox" className='me-3'/>2</p>
        <p className='text-tag-body'><input type="checkbox" className='me-3'/>3</p>
        <p className='text-tag-body'><input type="checkbox" className='me-3'/>4</p>
      </div>
    </div>
  )
}

export default Tag