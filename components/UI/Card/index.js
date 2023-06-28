import React from 'react'
import style from './styles.module.css'
import Image from 'next/image'
export default function CardComponent({ imageUrl, title, desc }) {
    return (
        <>
            <div className='col-xl-3 col-md-6 col-12'>
                <div className={style.card}>
                    <div className={style.content}>
                        <div className={style.box}>
                            <div className={style.image}>
                                <Image src={imageUrl} width="64" height="64" alt='' />
                            </div>
                            <div className={style.title}><h3>{title}</h3></div>
                        </div>
                        <div className={style.desc}>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
