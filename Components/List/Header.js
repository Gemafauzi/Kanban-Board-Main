import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'
import styleList from './list.module.css'

const Header = () => {
  return (
    <div className={styleList.headerContainer}>
        <CoverImage className={styleList.coverImageContainer}/>
        <Meta />
    </div>
  )
}

export default Header