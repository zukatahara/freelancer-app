import React from 'react'
import style from './styles.module.css'
export default function BigTitleComponent({ title }) {
    return (
        <>
            <div className={style.title}>
                <h2>{title}</h2>
            </div>
        </>
    )
}
