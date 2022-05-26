import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'
import styleList from './list.module.css'

const List = () => {
  return (
    <div className={styleList.listContainer}>
        <Header />
        <Separator />
        <Card>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
        </Card>
    </div>
  )
}

export default List