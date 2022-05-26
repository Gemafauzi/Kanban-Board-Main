import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='img-container'>
      <Image
      src='/images/avatar-01.png'
      alt="cover"
      width="40px"
      height="40px"
      className='photo-img'
    />
    </div>
  )
}

export default Avatar