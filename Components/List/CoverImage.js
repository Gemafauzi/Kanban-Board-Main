import React from 'react'
import Image from 'next/image'

const CoverImage = () => {
  return (
    <Image
      src='/images/cover-01.png'
      alt="cover"
      width="362px"
      height="115px"
      className='rounded'
    />
  )
}

export default CoverImage