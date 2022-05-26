import React from 'react'
import List from '../Components/List'
import style from './index.module.css'
import 'normalize.css';

const Home = () => {
  return (
    <div className={style.boardContainer}>
      <h1>My Kanban Board</h1>
      <div className={style.listContainer}>
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  )
}

export default Home