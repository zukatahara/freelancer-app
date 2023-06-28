import React from 'react'
import style from './styles.module.css'
export default function DividerComponent(props) {
  return (
    <>
      <div className='container'>
        <div className={style.divider}></div>
      </div>
    </>
  )
}
