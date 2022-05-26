import React from 'react'
import Image from 'next/image'
import CoverPic from '../../public/images/cover-01.png'
import styleList from './list.module.css'

const CoverImage = () => {
  return (
    <div className={styleList.coverImageContainer} >
      <Image className={styleList.imageContainer} alt={CoverPic} src={CoverPic} height={140}/>
    </div>
  )
}

export default CoverImage