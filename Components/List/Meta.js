import React from 'react'
import styleList from './list.module.css'

const Meta = () => {
  return (
    <div className={styleList.metaContainer}>
      <div className={styleList.metaTitle}>
        Not Started
      </div>
      <div className={styleList.metaDescription}>
        Way to Town of Colors
      </div>
    </div>
  )
}

export default Meta